import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import OpinionNews from '../components/opinion-news'

export const Route = createFileRoute('/opiniones')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <OpinionNews />
    </div>
  )
}
