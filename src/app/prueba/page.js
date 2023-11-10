'use client'

import React from 'react'
import Badges from '@/components/badges'
import marketingPrompts from "../../data/marketing_prompts.json"
function page() {

const firstElement = marketingPrompts[0]
console.log(firstElement)

  return (
    <div>
<Badges content ={firstElement.category} color={firstElement.category}/>
</div>
  )
}

export default page