import React from 'react'
import { connect } from 'react-redux'

import { updatePlayingAudio, payQuestion } from 'actions'

import AnswerVoiceProgress from 'components/AnswerVoiceProgress'

const mapState = state => ({
  playingAudioId: state.pages.playingAudioId,
  myself: state.myself
})

const mapDispatch = (dispatch, ownProps) => ({
  updatePlayingAudioId() {
    return dispatch(updatePlayingAudio(ownProps.question.id))
  },
  payQuestion(questionId) {
    return dispatch(payQuestion(questionId))
  }
})

export default connect(mapState, mapDispatch)(AnswerVoiceProgress)