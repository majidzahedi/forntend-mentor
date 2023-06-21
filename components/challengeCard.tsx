import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface ChallengeCardProps {
  title: string
  description: string
  imgSrc: string
  url: string
}

export default function ChallengeCard(props: ChallengeCardProps) {
  const { title, description, imgSrc, url } = props

  return (
    <Link href={url}>
      <Card>
        <CardHeader className="pt-0 pl-0 pr-0 ">
          <img src={imgSrc} className="rounded-t-lg" />
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <CardTitle className="font-bold text-2xl">
            {/* <Link href={url}>{title}</Link> */}
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
