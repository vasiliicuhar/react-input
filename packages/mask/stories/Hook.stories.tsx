import { useState } from 'react';

import { InputMask, useMask } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Mask',
  component: InputMask,
} satisfies Meta<typeof InputMask>;

function Component() {
  const [value, setValue] = useState('');

  const ref = useMask({
    mask: 'wwwnnn',
    replacement: { w: /\D/, n: /\d/ },
    // separate: true,
    showMask: true,
  });

  return (
    <input
      ref={ref}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
}

export const Hook = {
  render: Component,
} satisfies StoryObj<typeof InputMask>;
