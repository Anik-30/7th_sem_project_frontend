import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from 'reactflow';

import 'reactflow/dist/style.css';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 150 },
    data: { label: '1° low resolution Gridded weather data',
     }, 
    
    ...nodeDefaults,
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { label: 'SRGAN layer 1' },
    ...nodeDefaults,
  },
  {
    id: '3',
    position: { x: 250, y: 150 },
    data: { label: 'LSTM model layer 1' },
    ...nodeDefaults,
  },
  {
    id: '4',
    position: { x: 450, y: 0 },
    data: { label: 'SRGAN layer 2' },
    ...nodeDefaults,
  },
{
    id: '5',
    position: { x: 450, y: 150 },
    data: { label: 'LSTM model layer 2' },
    ...nodeDefaults,
  },
  {
    id: '6',
    position: { x: 750, y: 0 },
    data: { label: 'Reconstruction of 0.25° gidded image data' },
    ...nodeDefaults,
  },
  {
    id: '7',
    position: { x: 250, y: 300 },
    data: { label: 'Peephole/Gated recurrent network ' },
    ...nodeDefaults,
  },
  {
    id: '8',
    position: { x: 450, y: 300 },
    data: { label: 'Double conv' },
    ...nodeDefaults,
  },
  {
    id: '9',
    position: { x: 750, y: 150 },
    data: { label: 'Reconstruction of 0.25° gridded numercial data' },
    ...nodeDefaults,
  },

];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
  },
{
    id: 'e3-5',
    source: '3',
    target: '5',
  },
{
    id: 'e4-6',
    source: '4',
    target: '6',
  },
{
    id: 'e5-6',
    source: '5',
    target: '6',
  },
{
    id: 'e1-7',
    source: '1',
    target: '7',
  },
{
    id: 'e7-8',
    source: '7',
    target: '8',
  },
{
    id: 'e8-9',
    source: '8',
    target: '9',
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div style={{ width: '100%', height: '400px' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
    </div>
  );
};

export default Flow;