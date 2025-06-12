import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export interface SiteCardProps {
    title: string
    description: string
    url: string
    icon?: React.ReactNode
}

export function SiteCard({ title, description, url, icon }: SiteCardProps) {
    return (
        <Card className="w-full max-w-sm border border-border bg-background/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <CardHeader className="flex items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted shadow-inner">
                    {icon ?? <Globe className="w-5 h-5 text-muted-foreground" />}
                </div>
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed pb-3">
                {description}
            </CardContent>
            <CardFooter>
                <Button asChild variant="secondary" className="w-full text-sm">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`访问 ${title}`}
                    >
                        立即访问
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}
