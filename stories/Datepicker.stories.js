import React from 'react';
import moment from 'moment';

import { withDesign } from 'storybook-addon-designs';
import { withKnobs, boolean, date } from '@storybook/addon-knobs';

import { styled } from '@storybook/theming';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import DatePicker from '../app/components/elements/DatePicker';

const withWrapper = Story => <Story />;

export default {
  title: 'Date Pickers',
  decorators: [withDesign, withKnobs, withWrapper],
};

export const SingleDatePicker = () => {
  const initialDate = new Date();

  const initialDateKnob = (name, defaultValue) => {
    const stringTimestamp = date(name, defaultValue);
    return moment.utc(stringTimestamp);
  }

  const getFocused = () => boolean('Focused', true);

  return <DatePicker
    id="singleDatePicker"
    autoFocus={getFocused()}
    initialDate={initialDateKnob('Initial Date', initialDate)}
  />;
};

SingleDatePicker.story = {
  name: 'Single Date',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/iuXkrpuLTXExSnuPJE3Jtn/Tidepool-Design-System---Sprint-1?node-id=51%3A379'
    },
  },
};
