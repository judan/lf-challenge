import { Story } from '@storybook/react/types-6-0';
import ArtworkGrid, { ArtworkGridProps } from './ArtworkGrid';

export default {
  component: ArtworkGrid,
  title: 'Components/ArtworkGrid',
  parameters: {
    componentSubtitle: 'Short description of component.',
  },
}

const Template: Story<ArtworkGridProps> = (args) => (
  <ArtworkGrid {...args}>
    <div>Hello world.</div>
  </ArtworkGrid>
);

export const Primary = Template.bind({});

Primary.args = {};