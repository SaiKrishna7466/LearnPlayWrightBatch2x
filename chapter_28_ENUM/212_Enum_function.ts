//enum function
enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKED = "blocked"
}

console.log(SeverityLevels.LOW);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    prod = "https://prod.api.com",
    preprod = "https://preprod.api.com",
}

console.log(Environment.QA);