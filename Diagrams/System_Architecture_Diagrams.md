# SYSTEM ARCHITECTURE DIAGRAMS - BIM OPS STUDIO

## 1. HIGH-LEVEL SYSTEM OVERVIEW

```mermaid
graph TB
    subgraph "User Interface Layer"
        A1[Revit Add-ins]
        A2[Web Dashboard]
        A3[Mobile Apps]
        A4[API Clients]
    end
    
    subgraph "Application Gateway"
        B1[Load Balancer]
        B2[API Gateway]
        B3[Authentication Service]
    end
    
    subgraph "Core Services"
        C1[BIM Tools Engine]
        C2[AI Orchestrator]
        C3[Visual AI Pipeline]
        C4[Data Manager]
    end
    
    subgraph "AI Infrastructure"
        D1[Claude Vision API]
        D2[GPT-4 Vision]
        D3[Ollama Local]
        D4[Custom Models]
    end
    
    subgraph "Data Layer"
        E1[Azure SQL]
        E2[Redis Cache]
        E3[Blob Storage]
        E4[Analytics DB]
    end
    
    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B2
    
    B1 --> C1
    B2 --> C2
    B3 --> C1
    
    C1 --> E1
    C2 --> D1
    C2 --> D2
    C2 --> D3
    C2 --> D4
    C3 --> E3
    C4 --> E1
    C4 --> E2
```

## 2. VISUAL AI PROCESSING PIPELINE

```mermaid
sequenceDiagram
    participant U as User
    participant R as Revit
    participant S as Screenshot Server
    participant V as Visual AI Engine
    participant A as Action Executor
    participant D as Database
    
    U->>R: Performs Action
    R->>S: Screen Capture Trigger
    S->>S: Capture Multi-Monitor
    S->>V: Send Images
    V->>V: Image Analysis
    V->>V: Context Understanding
    V->>A: Generate Actions
    A->>R: Execute Commands
    A->>D: Log Results
    D-->>U: Update Dashboard
```

## 3. MULTI-MODEL AI ORCHESTRATION

```mermaid
graph LR
    subgraph "Task Router"
        A[Incoming Request]
        B{Task Classifier}
    end
    
    subgraph "Model Selection"
        C[Simple Tasks]
        D[Complex Tasks]
        E[Visual Tasks]
        F[Local Tasks]
    end
    
    subgraph "AI Models"
        G[Ollama/Llama3<br/>Local Processing]
        H[Fireworks/Llama4<br/>Fast Cloud]
        I[OpenRouter/Quasar<br/>Complex Analysis]
        J[Claude/GPT Vision<br/>Visual Understanding]
    end
    
    subgraph "Result Processing"
        K[Response Aggregator]
        L[Quality Check]
        M[Final Output]
    end
    
    A --> B
    B --> C
    B --> D
    B --> E
    B --> F
    
    C --> H
    D --> I
    E --> J
    F --> G
    
    G --> K
    H --> K
    I --> K
    J --> K
    
    K --> L
    L --> M
```

## 4. REVIT ADD-IN ARCHITECTURE

```mermaid
graph TD
    subgraph "Revit Environment"
        A[Revit Application]
        B[Revit API]
    end
    
    subgraph "BIM Ops Add-in Layer"
        C[External Application]
        D[External Commands]
        E[Event Handlers]
        F[UI Extensions]
    end
    
    subgraph "Service Layer"
        G[Authentication Service]
        H[Data Sync Service]
        I[AI Connector Service]
        J[Analytics Service]
    end
    
    subgraph "Communication Layer"
        K[REST Client]
        L[WebSocket Client]
        M[Message Queue]
    end
    
    subgraph "Cloud Services"
        N[BIM Ops API]
        O[AI Services]
        P[Storage Services]
    end
    
    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
    
    D --> G
    E --> H
    F --> I
    
    G --> K
    H --> L
    I --> M
    
    K --> N
    L --> O
    M --> P
```

## 5. SCREENSHOT SERVER ARCHITECTURE

```mermaid
graph TB
    subgraph "Windows Host"
        A1[Monitor 1 - Right]
        A2[Monitor 2 - Center]
        A3[Monitor 3 - Left]
        
        B1[Screenshot Server :5555]
        B2[Screenshot Server :5556]
        B3[Screenshot Server :5557]
        
        C[Screenshot Manager]
    end
    
    subgraph "WSL2 Environment"
        D[Playwright MCP]
        E[Visual AI Processor]
        F[Context Manager]
    end
    
    subgraph "Processing Pipeline"
        G[Image Capture]
        H[Compression]
        I[Feature Extraction]
        J[AI Analysis]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    
    B1 --> C
    B2 --> C
    B3 --> C
    
    C --> D
    D --> E
    E --> F
    
    F --> G
    G --> H
    H --> I
    I --> J
```

## 6. DATA FLOW ARCHITECTURE

```mermaid
graph LR
    subgraph "Data Sources"
        A[Revit Models]
        B[User Actions]
        C[AI Outputs]
        D[System Logs]
    end
    
    subgraph "Processing"
        E[ETL Pipeline]
        F[Stream Processing]
        G[Batch Processing]
    end
    
    subgraph "Storage"
        H[(Operational DB)]
        I[(Analytics DB)]
        J[(Object Storage)]
        K[(Cache Layer)]
    end
    
    subgraph "Consumption"
        L[Real-time Dashboard]
        M[Analytics Reports]
        N[AI Training Data]
        O[API Responses]
    end
    
    A --> E
    B --> F
    C --> F
    D --> G
    
    E --> H
    F --> K
    G --> I
    E --> J
    
    H --> O
    K --> L
    I --> M
    J --> N
```

## 7. SECURITY ARCHITECTURE

```mermaid
graph TD
    subgraph "External Access"
        A[Users]
        B[API Clients]
        C[Partners]
    end
    
    subgraph "Security Perimeter"
        D[WAF]
        E[DDoS Protection]
        F[Rate Limiting]
    end
    
    subgraph "Authentication Layer"
        G[Identity Provider]
        H[OAuth/SAML]
        I[MFA Service]
        J[API Keys]
    end
    
    subgraph "Authorization"
        K[RBAC Engine]
        L[Policy Manager]
        M[Permissions DB]
    end
    
    subgraph "Application Layer"
        N[Encrypted Services]
        O[Audit Logging]
        P[Data Encryption]
    end
    
    A --> D
    B --> D
    C --> D
    
    D --> E
    E --> F
    F --> G
    
    G --> H
    G --> I
    B --> J
    
    H --> K
    I --> K
    J --> K
    
    K --> L
    L --> M
    
    K --> N
    N --> O
    N --> P
```

## 8. DEPLOYMENT ARCHITECTURE

```mermaid
graph TB
    subgraph "Development"
        A[Local Dev]
        B[Feature Branches]
        C[Dev Environment]
    end
    
    subgraph "CI/CD Pipeline"
        D[GitHub Actions]
        E[Build & Test]
        F[Security Scan]
        G[Package]
    end
    
    subgraph "Staging"
        H[Staging Env]
        I[Integration Tests]
        J[Performance Tests]
    end
    
    subgraph "Production"
        K[Blue Environment]
        L[Green Environment]
        M[Load Balancer]
    end
    
    subgraph "Monitoring"
        N[APM]
        O[Logs]
        P[Metrics]
        Q[Alerts]
    end
    
    A --> B
    B --> D
    D --> E
    E --> F
    F --> G
    
    G --> H
    H --> I
    I --> J
    
    J --> K
    J --> L
    K --> M
    L --> M
    
    M --> N
    M --> O
    M --> P
    P --> Q
```

## 9. MICROSERVICES COMMUNICATION

```mermaid
graph TD
    subgraph "API Gateway"
        A[Kong/NGINX]
    end
    
    subgraph "Core Services"
        B[Auth Service]
        C[Project Service]
        D[Tool Service]
        E[AI Service]
    end
    
    subgraph "Support Services"
        F[Notification Service]
        G[Analytics Service]
        H[Billing Service]
    end
    
    subgraph "Message Bus"
        I[Azure Service Bus]
        J[Event Topics]
        K[Command Queues]
    end
    
    subgraph "Data Stores"
        L[(Auth DB)]
        M[(Project DB)]
        N[(Analytics DB)]
    end
    
    A --> B
    A --> C
    A --> D
    A --> E
    
    B --> L
    C --> M
    G --> N
    
    B --> I
    C --> I
    D --> I
    E --> I
    
    I --> J
    I --> K
    
    J --> F
    J --> G
    K --> H
```

## 10. SCALABILITY ARCHITECTURE

```mermaid
graph LR
    subgraph "Traffic Distribution"
        A[Azure Front Door]
        B[Regional POPs]
    end
    
    subgraph "Auto-Scaling Groups"
        C[Web Tier<br/>2-20 instances]
        D[API Tier<br/>5-50 instances]
        E[AI Tier<br/>3-30 instances]
    end
    
    subgraph "Data Scaling"
        F[Read Replicas]
        G[Sharded DBs]
        H[Distributed Cache]
    end
    
    subgraph "Monitoring"
        I[CPU Metrics]
        J[Memory Metrics]
        K[Request Metrics]
        L[Scaling Policies]
    end
    
    A --> B
    B --> C
    B --> D
    B --> E
    
    C --> F
    D --> G
    E --> H
    
    I --> L
    J --> L
    K --> L
    
    L --> C
    L --> D
    L --> E
```

## DIAGRAM USAGE NOTES

### For PowerPoint Presentations
1. Convert Mermaid diagrams to high-resolution images
2. Use consistent color scheme matching brand guidelines
3. Animate diagram elements for progressive disclosure
4. Include simplified versions for executive audiences

### Color Coding
- **Blue**: Core BIM Ops components
- **Green**: AI/ML services
- **Orange**: External integrations
- **Gray**: Infrastructure/Support
- **Red**: Security components

### Best Practices
1. Keep diagrams simple for slides
2. Use detailed versions for technical docs
3. Maintain consistent iconography
4. Include legends where necessary
5. Version control all diagram sources

### Tools for Diagram Creation
- **Mermaid**: For version-controlled diagrams
- **Draw.io**: For complex architectural diagrams
- **Lucidchart**: For collaborative editing
- **PowerPoint**: For presentation-ready versions

---

These diagrams provide a comprehensive visual representation of BIM Ops Studio's technical architecture, suitable for various audiences from technical teams to executives and investors.