import { LearningLabQuizQuestion, PromptImprovementSample } from '../types';

export const SQL_QUIZ_QUESTIONS: LearningLabQuizQuestion[] = [
  {
    id: 'sql-q1',
    topic: 'Relational Joins',
    question: 'You want to retrieve all registered students, along with their enrolled courses (if any). If a student has not enrolled in any course yet, their name should still appear in the result with NULL course details. Which JOIN should you use?',
    codeSnippet: `SELECT 
    s.student_id, 
    s.full_name, 
    e.course_title
FROM students s
____ enrollments e ON s.student_id = e.student_id;`,
    options: [
      'INNER JOIN',
      'LEFT OUTER JOIN',
      'CROSS JOIN',
      'FULL OUTER JOIN without conditions'
    ],
    correctIndex: 1,
    explanation: 'A LEFT OUTER JOIN returns all records from the left table (students), and matching records from the right table (enrollments). If there is no match, the right side returns NULL values, ensuring no registered students are excluded.'
  },
  {
    id: 'sql-q2',
    topic: 'Window Functions',
    question: 'Which SQL window function allows you to calculate the difference between the current row\'s monthly revenue and the previous month\'s revenue without performing a self-join?',
    codeSnippet: `SELECT 
    order_month,
    total_revenue,
    total_revenue - ____(total_revenue, 1) OVER (ORDER BY order_month) AS mom_growth
FROM monthly_sales;`,
    options: [
      'LEAD',
      'LAG',
      'ROW_NUMBER',
      'FIRST_VALUE'
    ],
    correctIndex: 1,
    explanation: 'LAG(total_revenue, 1) accesses data from the previous row at a specified physical offset within the partitioned or ordered result set, making month-over-month (MoM) delta calculations straightforward.'
  },
  {
    id: 'sql-q3',
    topic: 'Aggregations & Filtering',
    question: 'When filtering aggregated results (for example, finding departments where the average employee salary exceeds $85,000), which clause must you place after GROUP BY?',
    codeSnippet: `SELECT department_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY department_id
____ AVG(salary) > 85000;`,
    options: [
      'WHERE',
      'HAVING',
      'FILTER BY',
      'LIMIT'
    ],
    correctIndex: 1,
    explanation: 'The WHERE clause filters individual rows BEFORE aggregations occur. The HAVING clause is specifically designed to filter aggregated groups after the GROUP BY calculation has executed.'
  },
  {
    id: 'sql-q4',
    topic: 'Query Performance & Indexing',
    question: 'You run EXPLAIN ANALYZE on a slow query searching for users by email. The query planner reports "Seq Scan on users (cost=0.00..842.00 rows=1 width=38)". What should you do to optimize this lookup?',
    codeSnippet: `EXPLAIN ANALYZE 
SELECT * FROM users WHERE email = 'priya@example.com';`,
    options: [
      'Create a B-Tree index on users(email)',
      'Rewrite the query to use SELECT email instead of SELECT *',
      'Wrap email in UPPER(email) in the query',
      'Increase the LIMIT parameter to 100'
    ],
    correctIndex: 0,
    explanation: 'A "Seq Scan" (Sequential Scan) reads every single disk block in the table sequentially. Adding a B-Tree index on the `email` column enables an instantaneous "Index Scan", reducing logarithmic lookup time to sub-millisecond execution.'
  }
];

export const PROMPT_IMPROVEMENT_SAMPLES: PromptImprovementSample[] = [
  {
    id: 'prompt-1',
    domain: 'Software Architecture & Code Review',
    taskTitle: 'API Rate Limiting Architecture Review',
    initialWeakPrompt: 'How do I add rate limiting to my API?',
    weakPromptIssues: [
      'No context on backend framework or language',
      'No mention of traffic volume or distribution (single server vs distributed cluster)',
      'No specified format for the output or security edge cases',
      'Prone to generic surface-level advice with generic middleware snippets'
    ],
    optimizedEngineeredPrompt: `You are a Principal Backend Systems Architect. 
I have an Express.js API written in TypeScript running on 3 clustered Node.js worker containers behind an AWS Application Load Balancer.

Goal: Implement an enterprise-grade token bucket or sliding window rate-limiting strategy.
Constraints:
1. Must use a shared Redis cache instance to prevent distributed desynchronization across instances.
2. Tier 1: Public unauthenticated endpoints (60 req/min by IP).
3. Tier 2: Authenticated Bearer JWT users (600 req/min by tenant ID).
4. Return standardized RFC 7807 problem details JSON when HTTP 429 occurs, including 'Retry-After' and 'X-RateLimit-Reset' headers.

Please provide:
- The architectural evaluation (Sliding Window Log vs Token Bucket trade-offs)
- Production-ready TypeScript middleware code utilizing ioredis
- Unit test strategy handling burst requests`,
    techniquesUsed: [
      'Persona Framing (Principal Systems Architect)',
      'Explicit Technical Context & Topology (Cluster, Redis, Express/TypeScript)',
      'Tiered Constraint Specification (IP vs JWT Tenant)',
      'Strict Output Contracts (RFC 7807 Problem Details & HTTP headers)'
    ],
    beforeSampleOutput: `To add rate limiting, you can use the 'express-rate-limit' npm package:
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
This limits each IP to 100 requests per 15 minutes.`,
    afterSampleOutput: `### Architecture Evaluation: Sliding Window Counter vs Token Bucket
For a clustered Node.js environment on AWS, a **Redis-backed Sliding Window Counter with atomic Lua scripts** provides the optimal balance of memory efficiency ($O(1)$ space per key) while eliminating boundary burst exploits present in fixed window algorithms.

\`\`\`typescript
import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

// Atomic sliding window Lua script
const SLIDING_WINDOW_LUA = \`
  local key = KEYS[1]
  local now = tonumber(ARGV[1])
  local window = tonumber(ARGV[2])
  local limit = tonumber(ARGV[3])
  local clearBefore = now - window

  redis.call('ZREMRANGEBYSCORE', key, 0, clearBefore)
  local currentRequests = redis.call('ZCARD', key)

  if currentRequests < limit then
    redis.call('ZADD', key, now, now)
    redis.call('EXPIRE', key, math.ceil(window / 1000))
    return {1, limit - currentRequests - 1}
  else
    return {0, 0}
  end
\`;

export const createRateLimiter = (options: { windowMs: number; limit: number }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const identifier = (req as any).user?.tenantId || req.ip;
    const key = \`ratelimit:\${identifier}\`;
    const now = Date.now();

    try {
      const result = await redis.eval(
        SLIDING_WINDOW_LUA, 
        1, 
        key, 
        now, 
        options.windowMs, 
        options.limit
      ) as [number, number];

      const [allowed, remaining] = result;
      res.setHeader('X-RateLimit-Limit', options.limit);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, remaining));

      if (allowed === 1) {
        return next();
      }

      const retryAfterSeconds = Math.ceil(options.windowMs / 1000);
      res.setHeader('Retry-After', retryAfterSeconds);
      return res.status(429).json({
        type: 'https://api.nexora.academy/errors/rate-limit-exceeded',
        title: 'Rate limit exceeded',
        status: 429,
        detail: \`You have exceeded the request quota of \${options.limit} calls per window.\`,
        instance: req.originalUrl,
      });
    } catch (err) {
      // Fail-open strategy to prevent Redis outages from taking down API traffic
      console.error('Rate limiting Redis error (failing open):', err);
      return next();
    }
  };
};
\`\`\`
- RFC 7807 compliant error format with explicit machine-readable URI.
- Fail-open fallback safeguard ensures redis degradation does not cause complete site outage.`,
    proTip: 'Always include the target runtime, failure mode (fail-open vs fail-closed), and exact output interface when prompting AI for production software infrastructure.'
  },
  {
    id: 'prompt-2',
    domain: 'Data Science & Business Analytics',
    taskTitle: 'Executive Customer Churn Analysis',
    initialWeakPrompt: 'Analyze this customer data and tell me why customers are churning.',
    weakPromptIssues: [
      'Does not provide data schema, metric definitions, or business model',
      'No hypothesis direction or segmentation criteria',
      'Vague output structure without actionable ROI or prioritization'
    ],
    optimizedEngineeredPrompt: `You are a Senior Strategic Analytics Lead at a B2B SaaS company ($40M ARR, $2,400 ACV).

Dataset context:
- Features: Monthly Active Users (MAU), Feature Adoption Score (0-100), Support Tickets Filed, Last Login Days Ago, Contract Tier (Starter/Pro/Enterprise), Renewal Date.
- Historical Churn Rate: 8.2% annual net churn.

Task:
1. Define a structured hypothesis tree covering the top 3 plausible churn drivers (Product friction, Value realization gap, Customer support delays).
2. Formulate 3 specific SQL queries (PostgreSQL syntax with window functions) to isolate high-risk customer cohorts before renewal.
3. Propose a proactive customer success intervention workflow with estimated churn salvage probability.`,
    techniquesUsed: [
      'Quantified Business Context ($40M ARR, B2B SaaS ACV)',
      'Specific Feature Schema Mapping',
      'Hypothesis Tree Methodology',
      'Concrete Actionable Deliverables (SQL Queries + Success Workflow)'
    ],
    beforeSampleOutput: `Customers churn because of poor customer service, high prices, or because they found a competitor. You should send surveys to churned users and offer them discounts to come back.`,
    afterSampleOutput: `### 1. Structured Churn Hypothesis Tree
- **Hypothesis A (Value Realization Gap)**: Accounts where Feature Adoption Score < 35 within the first 60 days of onboarding experience 3.4x higher 12-month churn.
- **Hypothesis B (Support Fatigue)**: Accounts with > 2 unresolved "P1/P2 Urgent" tickets open for > 7 days have an 82% churn probability upon renewal.
- **Hypothesis C (Silent Abandonment)**: Pro tier accounts where MAU declined > 40% month-over-month despite paying subscription fees.

### 2. High-Risk Cohort Identification Query (PostgreSQL)
\`\`\`sql
WITH usage_velocity AS (
  SELECT 
    tenant_id,
    account_name,
    contract_tier,
    renewal_date,
    mau_current_month,
    LAG(mau_current_month, 1) OVER (PARTITION BY tenant_id ORDER BY report_month) AS mau_prev_month,
    support_tickets_open,
    feature_adoption_score
  FROM tenant_health_metrics
  WHERE report_month >= CURRENT_DATE - INTERVAL '60 days'
)
SELECT 
  tenant_id,
  account_name,
  contract_tier,
  renewal_date,
  ROUND(((mau_current_month - mau_prev_month)::NUMERIC / NULLIF(mau_prev_month, 0)) * 100, 1) AS mau_mom_drop_pct
FROM usage_velocity
WHERE (mau_current_month - mau_prev_month)::NUMERIC / NULLIF(mau_prev_month, 0) <= -0.30
  AND renewal_date <= CURRENT_DATE + INTERVAL '90 days'
ORDER BY renewal_date ASC;
\`\`\`
- Pinpoints accounts with >= 30% drop in active users up for renewal in next 90 days.`,
    proTip: 'Framing analytical prompts with specific business unit economics ($ ARR, ACV) grounds LLMs in enterprise realities instead of generic textbook advice.'
  }
];

export const PYTHON_QUIZ_QUESTIONS: LearningLabQuizQuestion[] = [
  {
    id: 'py-q1',
    topic: 'List Comprehensions & Filtering',
    question: 'What is the exact output of evaluating this Python list comprehension?',
    codeSnippet: `numbers = [1, 2, 3, 4, 5, 6]
result = [x * 2 for x in numbers if x % 2 == 0]
print(result)`,
    options: [
      '[2, 4, 6, 8, 10, 12]',
      '[4, 8, 12]',
      '[2, 6, 10]',
      '[2, 4, 6]'
    ],
    correctIndex: 1,
    explanation: 'The `if x % 2 == 0` filters the list to only even numbers: 2, 4, and 6. The expression `x * 2` then doubles each even number, yielding [4, 8, 12].'
  },
  {
    id: 'py-q2',
    topic: 'Mutable Default Arguments',
    question: 'What will calling append_item twice print in the following Python snippet?',
    codeSnippet: `def append_item(val, items=[]):
    items.append(val)
    return items

print(append_item(10))
print(append_item(20))`,
    options: [
      '[10] and then [20]',
      '[10] and then [10, 20]',
      '[10, 20] and then [10, 20]',
      'An UnboundLocalError exception is raised'
    ],
    correctIndex: 1,
    explanation: 'In Python, default arguments are evaluated only ONCE when the function definition is executed, NOT each time the function is called. Because lists are mutable objects, subsequent calls share the exact same list instance in memory, resulting in [10, 20]. The idiomatic pattern is `items=None`.'
  },
  {
    id: 'py-q3',
    topic: 'Dictionary Comprehension & Unpacking',
    question: 'What is the resulting dictionary after merging these two dictionaries using the union operator introduced in modern Python 3.9+?',
    codeSnippet: `defaults = {'theme': 'dark', 'font_size': 14, 'show_sidebar': True}
user_prefs = {'font_size': 16, 'show_sidebar': False}

config = defaults | user_prefs
print(config['font_size'], config['theme'])`,
    options: [
      '14 dark',
      '16 dark',
      '16 None',
      'Raises a TypeError because | is only for bitwise integers'
    ],
    correctIndex: 1,
    explanation: 'The dictionary merge operator `|` creates a new dictionary containing keys and values from both operands. When duplicate keys exist (such as `font_size`), the right-hand operand (`user_prefs`) overrides the left-hand operand, resulting in `16` and keeping `theme: "dark"`.'
  },
  {
    id: 'py-q4',
    topic: 'Generators vs Lists',
    question: 'What is the key performance benefit of using a generator expression `(x**2 for x in range(1_000_000))` instead of a list comprehension `[x**2 for x in range(1_000_000)]`?',
    codeSnippet: `# Generator
gen = (x**2 for x in range(1_000_000))
# List
lst = [x**2 for x in range(1_000_000)]`,
    options: [
      'Generators execute multithreaded operations in parallel across CPU cores',
      'Generators evaluate lazily on-demand, consuming minimal constant O(1) memory instead of allocating millions of elements in RAM',
      'Generators guarantee cryptographic immutability of the contained elements',
      'Generators automatically serialize items to disk in case of power failure'
    ],
    correctIndex: 1,
    explanation: 'Generators implement lazy evaluation via the iterator protocol: they yield elements one at a time only when requested (via `next()` or a loop), consuming constant memory regardless of whether there are 10 or 100 million items.'
  }
];
