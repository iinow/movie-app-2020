import { Chance } from 'chance'
import {  } from 'rxjs'

const chance = new Chance()

interface Like {
  id: number,
  name: string,
  image: string,
  rating: number
}

let foodLike: Like[] = []

for(let i = 0; i < 10; i++) {
  foodLike.push({
    id: i,
    image: chance.url({
      protocol: 'http'
    }),
    name: chance.name(),
    rating: chance.integer({
      min: 0,
      max: 5
    })
  })
}

export {
  foodLike
}
