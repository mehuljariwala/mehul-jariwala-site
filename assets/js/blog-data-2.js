// Additional blog posts (6-10)
const additionalBlogPosts = [
  {
    id: 6,
    title: "Database Design Patterns: From MySQL to MongoDB",
    category: "Databases",
    date: "2023-12-20",
    image: "./assets/images/blog-database.png",
    excerpt:
      "Compare relational and NoSQL database design patterns, migration strategies, and best practices for choosing the right database for your application.",
    content: `
      <h2>Database Design Fundamentals</h2>
      <p>Choosing the right database and design patterns is crucial for application performance, scalability, and maintainability.</p>
      
      <h3>Relational vs NoSQL Design</h3>
      <p>Understanding when to use SQL vs NoSQL databases depends on your data structure and access patterns:</p>
      
      <h4>MySQL (Relational)</h4>
      <ul>
        <li>ACID transactions</li>
        <li>Structured data with relationships</li>
        <li>Complex queries and joins</li>
        <li>Data consistency requirements</li>
      </ul>
      
      <h4>MongoDB (Document)</h4>
      <ul>
        <li>Flexible schema</li>
        <li>Horizontal scaling</li>
        <li>Rapid development</li>
        <li>JSON-like data structures</li>
      </ul>
      
      <h3>Design Patterns</h3>
      
      <h4>Repository Pattern</h4>
      <pre><code>// Abstract repository interface
interface UserRepository {
  findById(id: string): Promise&lt;User&gt;;
  create(user: User): Promise&lt;User&gt;;
  update(id: string, user: Partial&lt;User&gt;): Promise&lt;User&gt;;
  delete(id: string): Promise&lt;void&gt;;
}

// MySQL implementation
class MySQLUserRepository implements UserRepository {
  async findById(id: string): Promise&lt;User&gt; {
    const result = await this.db.query(
      'SELECT * FROM users WHERE id = ?', [id]
    );
    return result[0];
  }
}

// MongoDB implementation
class MongoUserRepository implements UserRepository {
  async findById(id: string): Promise&lt;User&gt; {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }
}</code></pre>
      
      <h3>Migration Strategies</h3>
      <ul>
        <li><strong>Big Bang Migration:</strong> Complete system replacement</li>
        <li><strong>Strangler Fig Pattern:</strong> Gradual replacement</li>
        <li><strong>Database Sharding:</strong> Horizontal partitioning</li>
        <li><strong>Read Replicas:</strong> Scaling read operations</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <ul>
        <li>Proper indexing strategies</li>
        <li>Query optimization techniques</li>
        <li>Connection pooling</li>
        <li>Caching layers (Redis, Memcached)</li>
      </ul>
      
      <p>Understanding database design patterns helps build scalable and maintainable data layers.</p>
    `,
  },
  {
    id: 7,
    title: "AI Agent Development with CrewAI and AutoGen",
    category: "AI Stack",
    date: "2023-12-15",
    image: "./assets/images/blog-ai-agents.png",
    excerpt:
      "Build intelligent AI agents that can collaborate, reason, and execute complex tasks using CrewAI and AutoGen frameworks.",
    content: `
      <h2>AI Agent Frameworks Overview</h2>
      <p>AI agents represent the next evolution in artificial intelligence, capable of autonomous decision-making and task execution.</p>
      
      <h3>CrewAI: Collaborative AI Agents</h3>
      <p>CrewAI enables multiple AI agents to work together on complex tasks:</p>
      
      <pre><code>from crewai import Agent, Task, Crew, Process

# Define specialized agents
researcher = Agent(
    role='Research Analyst',
    goal='Gather and analyze market data',
    backstory='Expert in market research and data analysis',
    verbose=True,
    allow_delegation=False
)

writer = Agent(
    role='Content Writer',
    goal='Create engaging content based on research',
    backstory='Professional writer with marketing expertise',
    verbose=True,
    allow_delegation=False
)

# Define tasks
research_task = Task(
    description='Research the latest trends in AI technology',
    agent=researcher,
    expected_output='Comprehensive research report'
)

writing_task = Task(
    description='Write a blog post based on the research',
    agent=writer,
    expected_output='Well-structured blog post'
)

# Create and run crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential
)

result = crew.kickoff()</code></pre>
      
      <h3>AutoGen: Conversational AI Agents</h3>
      <p>AutoGen focuses on multi-agent conversations and problem-solving:</p>
      
      <pre><code>import autogen

# Configure agents
config_list = [
    {
        "model": "gpt-4",
        "api_key": "your-api-key"
    }
]

assistant = autogen.AssistantAgent(
    name="assistant",
    llm_config={"config_list": config_list}
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={"work_dir": "web_search"}
)

# Start conversation
user_proxy.initiate_chat(
    assistant,
    message="Analyze the current state of quantum computing"
)</code></pre>
      
      <h3>Agent Communication Patterns</h3>
      <ul>
        <li><strong>Sequential:</strong> Agents work in order</li>
        <li><strong>Hierarchical:</strong> Manager-agent relationships</li>
        <li><strong>Collaborative:</strong> Peer-to-peer communication</li>
        <li><strong>Competitive:</strong> Multiple solutions comparison</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Define clear roles and responsibilities</li>
        <li>Implement proper error handling</li>
        <li>Monitor agent performance and costs</li>
        <li>Use appropriate LLM models for tasks</li>
      </ul>
      
      <p>AI agents enable building sophisticated autonomous systems that can handle complex, multi-step processes.</p>
    `,
  },
  {
    id: 8,
    title: "Modern CSS Architecture with Tailwind and Component Design",
    category: "CSS & UI Frameworks",
    date: "2023-12-10",
    image: "./assets/images/blog-css.png",
    excerpt:
      "Master modern CSS architecture using Tailwind CSS, design systems, and component-based styling for scalable web applications.",
    content: `
      <h2>Modern CSS Architecture</h2>
      <p>CSS architecture has evolved significantly with utility-first frameworks and component-based design systems.</p>
      
      <h3>Tailwind CSS Fundamentals</h3>
      <p>Tailwind CSS provides utility classes for rapid UI development:</p>
      
      <pre><code>// Component with Tailwind utilities
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    &lt;button
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
      
      <h3>Design System Implementation</h3>
      <p>Creating consistent design systems with CSS custom properties:</p>
      
      <pre><code>/* Design tokens */
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}</code></pre>
      
      <h3>Component Architecture</h3>
      <ul>
        <li><strong>Atomic Design:</strong> Atoms, molecules, organisms</li>
        <li><strong>BEM Methodology:</strong> Block, Element, Modifier</li>
        <li><strong>CSS Modules:</strong> Scoped styling</li>
        <li><strong>Styled Components:</strong> CSS-in-JS approach</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <ul>
        <li>Critical CSS extraction</li>
        <li>CSS purging and minification</li>
        <li>Lazy loading of stylesheets</li>
        <li>CSS custom properties for theming</li>
      </ul>
      
      <h3>Responsive Design Patterns</h3>
      <pre><code>// Mobile-first responsive design
.container {
  @apply px-4 mx-auto;
  
  @screen sm {
    @apply px-6;
  }
  
  @screen lg {
    @apply px-8 max-w-7xl;
  }
}

.grid-responsive {
  @apply grid grid-cols-1 gap-4;
  
  @screen md {
    @apply grid-cols-2 gap-6;
  }
  
  @screen lg {
    @apply grid-cols-3 gap-8;
  }
}</code></pre>
      
      <p>Modern CSS architecture enables building maintainable, scalable, and performant user interfaces.</p>
    `,
  },
  {
    id: 9,
    title:
      "Testing Strategies: From Unit Tests to E2E with Jest and Playwright",
    category: "Testing",
    date: "2023-12-05",
    image: "./assets/images/blog-testing.png",
    excerpt:
      "Comprehensive testing strategies covering unit testing with Jest, integration testing, and end-to-end testing with Playwright for robust applications.",
    content: `
      <h2>Testing Pyramid Strategy</h2>
      <p>Effective testing requires a balanced approach across different levels: unit tests, integration tests, and end-to-end tests.</p>
      
      <h3>Unit Testing with Jest</h3>
      <p>Jest provides a comprehensive testing framework for JavaScript applications:</p>
      
      <pre><code>// User service unit tests
describe('UserService', () => {
  let userService;
  let mockUserRepository;
  
  beforeEach(() => {
    mockUserRepository = {
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    };
    userService = new UserService(mockUserRepository);
  });
  
  describe('getUserById', () => {
    it('should return user when found', async () => {
      const mockUser = { id: '1', name: 'John Doe', email: 'john@example.com' };
      mockUserRepository.findById.mockResolvedValue(mockUser);
      
      const result = await userService.getUserById('1');
      
      expect(result).toEqual(mockUser);
      expect(mockUserRepository.findById).toHaveBeenCalledWith('1');
    });
    
    it('should throw error when user not found', async () => {
      mockUserRepository.findById.mockResolvedValue(null);
      
      await expect(userService.getUserById('999'))
        .rejects
        .toThrow('User not found');
    });
  });
  
  describe('createUser', () => {
    it('should create user with valid data', async () => {
      const userData = { name: 'Jane Doe', email: 'jane@example.com' };
      const createdUser = { id: '2', ...userData };
      mockUserRepository.create.mockResolvedValue(createdUser);
      
      const result = await userService.createUser(userData);
      
      expect(result).toEqual(createdUser);
      expect(mockUserRepository.create).toHaveBeenCalledWith(userData);
    });
  });
});</code></pre>
      
      <h3>Integration Testing</h3>
      <p>Testing component interactions and API endpoints:</p>
      
      <pre><code>// API integration tests
describe('User API Integration', () => {
  let app;
  let server;
  
  beforeAll(async () => {
    app = await createApp();
    server = app.listen(0);
  });
  
  afterAll(async () => {
    await server.close();
  });
  
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com'
      };
      
      const response = await request(app)
        .post('/users')
        .send(userData)
        .expect(201);
      
      expect(response.body).toMatchObject({
        id: expect.any(String),
        name: userData.name,
        email: userData.email
      });
    });
  });
});</code></pre>
      
      <h3>End-to-End Testing with Playwright</h3>
      <p>Playwright provides powerful E2E testing capabilities:</p>
      
      <pre><code>// E2E test for user registration
import { test, expect } from '@playwright/test';

test.describe('User Registration', () => {
  test('should register a new user successfully', async ({ page }) => {
    await page.goto('/register');
    
    // Fill registration form
    await page.fill('[data-testid="name-input"]', 'John Doe');
    await page.fill('[data-testid="email-input"]', 'john@example.com');
    await page.fill('[data-testid="password-input"]', 'securePassword123');
    
    // Submit form
    await page.click('[data-testid="submit-button"]');
    
    // Verify success message
    await expect(page.locator('[data-testid="success-message"]'))
      .toContainText('Registration successful');
    
    // Verify redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
  });
  
  test('should show validation errors for invalid input', async ({ page }) => {
    await page.goto('/register');
    
    // Submit empty form
    await page.click('[data-testid="submit-button"]');
    
    // Verify validation errors
    await expect(page.locator('[data-testid="name-error"]'))
      .toContainText('Name is required');
    await expect(page.locator('[data-testid="email-error"]'))
      .toContainText('Valid email is required');
  });
});</code></pre>
      
      <h3>Testing Best Practices</h3>
      <ul>
        <li><strong>AAA Pattern:</strong> Arrange, Act, Assert</li>
        <li><strong>Test Isolation:</strong> Each test should be independent</li>
        <li><strong>Mocking:</strong> Isolate units under test</li>
        <li><strong>Coverage:</strong> Aim for meaningful coverage, not just numbers</li>
        <li><strong>CI/CD Integration:</strong> Automated testing in pipelines</li>
      </ul>
      
      <h3>Advanced Testing Techniques</h3>
      <ul>
        <li>Visual regression testing</li>
        <li>Performance testing</li>
        <li>Accessibility testing</li>
        <li>Cross-browser testing</li>
        <li>Mobile testing</li>
      </ul>
      
      <p>Comprehensive testing strategies ensure application reliability and maintainability.</p>
    `,
  },
  {
    id: 10,
    title: "Event-Driven Architecture with Kafka and Message Queues",
    category: "Messaging & Event Systems",
    date: "2023-11-30",
    image: "./assets/images/blog-kafka.png",
    excerpt:
      "Implement scalable event-driven systems using Apache Kafka, RabbitMQ, and event streaming patterns for microservices communication.",
    content: `
      <h2>Event-Driven Architecture Fundamentals</h2>
      <p>Event-driven architecture enables loose coupling, scalability, and real-time processing in distributed systems.</p>
      
      <h3>Apache Kafka Implementation</h3>
      <p>Kafka provides high-throughput, distributed event streaming:</p>
      
      <pre><code>// Kafka producer in Node.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function publishUserEvent(eventType, userData) {
  await producer.connect();
  
  await producer.send({
    topic: 'user-events',
    messages: [{
      key: userData.id,
      value: JSON.stringify({
        eventType,
        userId: userData.id,
        timestamp: new Date().toISOString(),
        data: userData
      })
    }]
  });
  
  await producer.disconnect();
}

// Usage
await publishUserEvent('USER_CREATED', {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com'
});</code></pre>
      
      <h3>Kafka Consumer Implementation</h3>
      <pre><code>// Kafka consumer for processing events
const consumer = kafka.consumer({ groupId: 'user-processors' });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'user-events' });
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const event = JSON.parse(message.value.toString());
      
      switch (event.eventType) {
        case 'USER_CREATED':
          await handleUserCreated(event);
          break;
        case 'USER_UPDATED':
          await handleUserUpdated(event);
          break;
        case 'USER_DELETED':
          await handleUserDeleted(event);
          break;
      }
    }
  });
}

async function handleUserCreated(event) {
  // Send welcome email
  await emailService.sendWelcomeEmail(event.data.email);
  
  // Update analytics
  await analyticsService.trackUserRegistration(event.data);
  
  // Create user profile
  await profileService.createProfile(event.data.id);
}</code></pre>
      
      <h3>RabbitMQ Message Queues</h3>
      <p>RabbitMQ provides reliable message queuing with various exchange types:</p>
      
      <pre><code>// RabbitMQ setup with amqplib
const amqp = require('amqplib');

async function setupRabbitMQ() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  // Declare exchange
  await channel.assertExchange('user-events', 'topic', { durable: true });
  
  // Declare queues
  await channel.assertQueue('email-notifications', { durable: true });
  await channel.assertQueue('analytics-processing', { durable: true });
  
  // Bind queues to exchange
  await channel.bindQueue('email-notifications', 'user-events', 'user.*');
  await channel.bindQueue('analytics-processing', 'user-events', 'user.created');
  
  return { connection, channel };
}

// Message publisher
async function publishMessage(channel, routingKey, message) {
  await channel.publish(
    'user-events',
    routingKey,
    Buffer.from(JSON.stringify(message)),
    { persistent: true }
  );
}</code></pre>
      
      <h3>Event Sourcing Pattern</h3>
      <p>Storing state changes as a sequence of events:</p>
      
      <pre><code>// Event store implementation
class EventStore {
  constructor() {
    this.events = [];
  }
  
  appendEvent(streamId, event) {
    const eventRecord = {
      streamId,
      eventType: event.constructor.name,
      eventData: event,
      timestamp: new Date(),
      version: this.getNextVersion(streamId)
    };
    
    this.events.push(eventRecord);
    return eventRecord;
  }
  
  getEvents(streamId) {
    return this.events.filter(e => e.streamId === streamId);
  }
  
  getNextVersion(streamId) {
    const streamEvents = this.getEvents(streamId);
    return streamEvents.length + 1;
  }
}

// Event classes
class UserCreatedEvent {
  constructor(userId, name, email) {
    this.userId = userId;
    this.name = name;
    this.email = email;
  }
}

class UserUpdatedEvent {
  constructor(userId, changes) {
    this.userId = userId;
    this.changes = changes;
  }
}</code></pre>
      
      <h3>Event-Driven Patterns</h3>
      <ul>
        <li><strong>Event Sourcing:</strong> Store events as the source of truth</li>
        <li><strong>CQRS:</strong> Separate read and write models</li>
        <li><strong>Saga Pattern:</strong> Manage distributed transactions</li>
        <li><strong>Event Streaming:</strong> Real-time data processing</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Design events for backward compatibility</li>
        <li>Implement proper error handling and retries</li>
        <li>Use idempotent event handlers</li>
        <li>Monitor event processing performance</li>
        <li>Implement event versioning strategies</li>
      </ul>
      
      <p>Event-driven architecture enables building scalable, resilient, and maintainable distributed systems.</p>
    `,
  },
];

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = additionalBlogPosts;
}
