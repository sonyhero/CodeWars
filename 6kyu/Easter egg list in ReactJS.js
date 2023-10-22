import React from 'react'

export const EggList = (props) => {
  return <ul>{props.eggs.map((el, i) => {
    return <EasterEgg key={i} name={el}/>
  })}</ul>
  }

export const EasterEgg = (props) => {
return <li>{props.name}</li>
};