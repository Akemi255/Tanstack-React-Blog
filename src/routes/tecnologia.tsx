import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import TechnologyNews from '../components/technology-news'

export const Route = createFileRoute('/tecnologia')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <TechnologyNews />
    </div>
  )
}
