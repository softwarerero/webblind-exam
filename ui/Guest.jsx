import React, { useState } from 'react'
import styled from 'styled-components'
import { withTracker } from 'meteor/react-meteor-data'
import { AudioStreams } from '/collections/AudioStreams.js'

const GuestInner = (props) => {
    const { audioStream, userId } = props

    if (userId || !audioStream) return <></>
    return <Styles>
        <audio controls autoplay><source src={audioStream.file}/></audio>
    </Styles>

}

export const Guest = 
    withTracker(() => {
        Meteor.subscribe('AudioStreams.all')
        const audioStream = AudioStreams.findOne() // TODO timing related stuff
        console.log(audioStream)
        const userId = Meteor.userId()
        return ({ audioStream, userId })
    })(GuestInner)


const Styles = styled.div`

`