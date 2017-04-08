import React from 'react'
import { connect } from 'react-redux'

import { updatePlayingAudio } from 'actions'

import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

const mapState = state => ({
  playingAudioId: state.pages.playingAudioId
})

const mapDispatch = (dispatch, ownProps) => ({
  updatePlayingAudioId() {
    dispatch(updatePlayingAudio(ownProps.question.id))
  }
})

export default connect(mapState, mapDispatch)(AnswerVoiceProgress)