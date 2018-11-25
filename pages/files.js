import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Audio from 'components/Audio'
import Title from 'components/Title'
import File from 'components/File'
import actions from 'state/actions/files'
import filesAPI from 'api/files'

class Files extends React.Component {
  static async getInitialProps ({ store }) {
    try {
      let files = await filesAPI.list()
      
      store.dispatch(actions.listSuccess(files))
    } catch (err) {
      console.error(err)
    }
    
    return {
      title: 'Files!!'
    }
  }

  static propTypes = {
  }

  render () {
    const { title, files } = this.props
    
    return (
      <Main title='files' host='shintech.ninja' favicon='/static/images/react.svg'>
        <Title title={title} fontSize='22ch' colors={['green', 'lightgreen']} />
          {files.list.map(file => <File key={file} filename={file} />)
        }
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(Files)
