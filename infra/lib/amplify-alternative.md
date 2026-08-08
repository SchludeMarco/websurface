# Alternative: AWS Amplify Hosting statt ECS/Fargate

Dieser `infra/`-Ordner implementiert bewusst die ECS/Fargate-Variante, weil
sie die im Studium behandelten Kern-Compute-/Netzwerk-Konzepte (VPC,
Security Groups, Load Balancer, Auto Scaling, IAM-Rollentrennung) am
direktesten zeigt. Für den tatsächlichen Betrieb von WebSurface wäre jedoch
auch **AWS Amplify Hosting** eine valide, in vielen Fällen sogar bessere
Wahl — hier die ehrliche Abwägung:

| Kriterium | ECS/Fargate + ALB (dieser Stack) | Amplify Hosting |
|---|---|---|
| Betriebsaufwand | Höher — eigene VPC, Cluster, Scaling-Policies pflegen | Niedrig — verwalteter Next.js-SSR-Betrieb |
| Kosten bei niedriger Last | NAT Gateway + ALB laufen auch bei 0 Requests | Pay-per-Use, kein Grundrauschen |
| Kontrolle über Netzwerk/Security Groups | Vollständig (eigene VPC) | Eingeschränkt (Amplify verwaltet die Infrastruktur) |
| Passend für | Mittelfristig wachsende Last, eigene Compliance-Anforderungen an Netzwerksegmentierung | Frühe Prototyp-/MVP-Phase, kleines Team ohne dedizierte Infra-Rolle |
| Lernwert (Portfolio) | Zeigt Netzwerk-/IAM-/Scaling-Grundlagen konkret | Zeigt eher Managed-Service-Kompetenz |

**Empfehlung im Konzeptdokument:** WebSurface startet mit Amplify Hosting
für die ersten Pilotkunden (schneller, günstiger, weniger Betriebsrisiko)
und migriert erst bei nachgewiesenem Bedarf (hohe/volatile Last, strengere
Netzwerk-Compliance-Anforderungen einzelner Kunden) zu ECS/Fargate. Dieser
CDK-Stack liegt bereit, falls/wenn dieser Punkt erreicht wird — RDS und S3
aus `data-stack.ts` würden in beiden Varianten unverändert weiterverwendet.
