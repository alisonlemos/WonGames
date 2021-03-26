import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
    title: 'Main',
    components: Main,
    argTypes: {
        title: {
            control: {
                type: 'text'
            },
            defaultValue: 'React Avançado'
        },
        description: {
            control: {
                type: 'text'
            },
            defaultValue: 'TypeScript, ReactJS, NextJS e Styled Components'
        }
    }
} as Meta

const Template: Story = (args) => <Main {...args} />

export const Basic = Template.bind({})
