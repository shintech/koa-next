import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Audio from 'components/Audio'
import Title from 'components/Title'
import FileList from 'components/FileList'
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
    const { title, files, selectNowPlaying } = this.props
    
    return (
      <Main title='files' host='shintech.ninja' favicon='/static/images/react.svg'>
        <Title title={title} fontSize='22ch' colors={['green', 'lightgreen']} />
        <FileList files={files} selectNowPlaying={selectNowPlaying} />
        <Audio media={files.nowPlaying} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    selectNowPlaying: value => {
      dispatch(actions.selectNowPlaying(value))
    }
  })
)(Files)
