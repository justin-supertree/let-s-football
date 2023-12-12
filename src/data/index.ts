const forwardPositionData = [
  { position: 'ST', position_fullName: 'Striker', color: 'red' },
  { position: 'CF', position_fullName: 'Center Forward', color: 'red' },
  { position: 'LF', position_fullName: 'Left Striker', color: 'red' },
  { position: 'RF', position_fullName: 'Right Striker', color: 'red' },
  { position: 'SS', position_fullName: 'Second Striker', color: 'red' },
  { position: 'False 9', position_fullName: 'False Nine', color: 'red' },
];

const midPositionData = [
  {
    position: 'CM',
    position_fullName: 'Central Midfielder',
    color: 'lightgreen',
  },
  {
    position: 'CDM',
    position_fullName: 'Central Defensive Midfielder',
    color: 'lightgreen',
  },
  {
    position: 'CAM',
    position_fullName: 'Central Attacking Midfielder',
    color: 'lightgreen',
  },
  {
    position: 'RM',
    position_fullName: 'Right Midfielder',
    color: 'lightgreen',
  },
  { position: 'LM', position_fullName: 'Left Midfielder', color: 'lightgreen' },
];

const defencePositionData = [
  { position: 'CB', position_fullName: 'Center Back', color: 'blue' },
  { position: 'RB', position_fullName: 'Right Back', color: 'blue' },
  { position: 'LB', position_fullName: 'Left Back', color: 'blue' },
  { position: 'RWB', position_fullName: 'Right Wing Back', color: 'blue' },
  { position: 'LWB', position_fullName: 'Left Wing Back', color: 'blue' },
];

const formationData = {
  formation: '433',
  striker: [
    { position: 'LF', position_fullName: 'Left Striker', color: 'red' },
    { position: 'ST', position_fullName: 'Striker', color: 'red' },
    { position: 'RF', position_fullName: 'Right Striker', color: 'red' },
  ],
  midfield: [
    {
      position: 'LM',
      position_fullName: 'Left Midfielder',
      color: 'lightgreen',
    },
    {
      position: 'CM',
      position_fullName: 'Central Midfielder',
      color: 'lightgreen',
    },
    {
      position: 'RM',
      position_fullName: 'Right Midfielder',
      color: 'lightgreen',
    },
  ],
  defence: [
    { position: 'LB', position_fullName: 'Left Back', color: 'blue' },
    { position: 'CB', position_fullName: 'Center Back', color: 'blue' },
    { position: 'CB', position_fullName: 'Center Back', color: 'blue' },
    { position: 'RB', position_fullName: 'Right Back', color: 'blue' },
  ],
  goalKipper: [
    {
      position: 'GK',
      position_fullName: 'Goal Kipper',
      color: 'yellow',
    },
  ],
};

export {
  forwardPositionData,
  midPositionData,
  defencePositionData,
  formationData,
};
