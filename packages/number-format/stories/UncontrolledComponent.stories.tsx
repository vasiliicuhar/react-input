import { InputNumberFormat } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Number Format',
  component: InputNumberFormat,
} satisfies Meta<typeof InputNumberFormat>;

function Component() {
  return (
    <>
      <InputNumberFormat />

      <>
        {/* request a currency format */}
        <InputNumberFormat currency="EUR" format="currency" locales="de-DE" />
        {/* the Japanese yen doesn't use a minor unit */}
        <InputNumberFormat currency="JPY" format="currency" locales="ja-JP" />
        {/* limit to three significant digits */}
        <InputNumberFormat locales="en-IN" maximumIntegerDigits={3} />
        {/* Formatting with units */}
        <InputNumberFormat format="unit" locales="pt-PT" unit="kilometer-per-hour" />
        <InputNumberFormat format="unit" locales="en-GB" unit="liter" unitDisplay="long" />
      </>
    </>
  );
}

export const UncontrolledComponent = {
  render: Component,
} satisfies StoryObj<typeof InputNumberFormat>;
