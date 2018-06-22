/* @jsx h */
import {h} from 'hyperapp'
import {storiesOf} from '@zmoki/storybook-hyperapp'
import {Link} from './Link'

storiesOf('Components/Link', module)
  .add('default', () => <Link href='https://uploadcare.com/'>Uploadcare Link</Link>)