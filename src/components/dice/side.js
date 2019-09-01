import React from 'react'
import { Svg, Rect, Circle } from 'react-native-svg'

const l = 25;
const c = 50;
const b = 75;

const Square = props =>
  <Rect {...props} x={4} y={4} width={94} height={94} rx={10} fill="#FFF" stroke="#000000" strokeWidth={5} />

const Dot = props =>
  <Circle {...props} r={10} />

const Side = props =>
  <Svg height={100} width={100}>
    <Square />
    {props.children}
  </Svg>

export const SideOne = props =>
  <Side>
    <Dot cx={c} cy={c} />
  </Side>

export const SideTwo = props =>
  <Side>
    <Dot cx={l} cy={b} />
    <Dot cx={b} cy={l} />
  </Side>

export const SideThree = props =>
  <Side>
    <Dot cx={b} cy={b} />
    <Dot cx={c} cy={c} />
    <Dot cx={l} cy={l} />
  </Side>

export const SideFour = props =>
  <Side>
    <Dot cx={b} cy={b} />
    <Dot cx={b} cy={l} />
    <Dot cx={l} cy={b} />
    <Dot cx={l} cy={l} />
  </Side>

export const SideFive = props =>
  <Side>
    <Dot cx={b} cy={b} />
    <Dot cx={b} cy={l} />
    <Dot cx={c} cy={c} />
    <Dot cx={l} cy={b} />
    <Dot cx={l} cy={l} />
  </Side>

export const SideSix = props =>
  <Side>
    <Dot cx={b} cy={b} />
    <Dot cx={b} cy={c} />
    <Dot cx={b} cy={l} />
    <Dot cx={l} cy={b} />
    <Dot cx={l} cy={c} />
    <Dot cx={l} cy={l} />
  </Side>

export default Side;
