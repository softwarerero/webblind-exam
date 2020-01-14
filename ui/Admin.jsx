import React, { useState } from 'react'
import styled from 'styled-components'
import { withTracker } from 'meteor/react-meteor-data'
import { loadingWrapper, warn } from '/ui/Helpers.js'
import { AudioStreams } from '/collections/AudioStreams.js'

const AdminInner = (props) => {
    const { audioStreams, isLoading, userId } = props

    const add = () => event => {
        event.preventDefault()
        if (!file || !startDate || !startTime) {
            return warn('Please provide a file a start date and start time')
        }
        AudioStreams.insert({
            startDate,
            startTime,
            file,
        })
    }
    const remove = audioStream => event => AudioStreams.remove(audioStream._id)
    const [file, setFile] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const setValue = setter => event => setter(event.target.value.trim())

    if (!userId) return <></>
    return (
        <Styles>
            {loadingWrapper(isLoading, (() => <>
                <form>
                    {/* <label>File: <input type="file" accept=".mp3" onChange={inputFile}/></label> */}
                    <label>File: <input type="text" onChange={setValue(setFile)}/></label>
                    <label>Start date: <input type="date" name="startDate" onChange={setValue(setStartDate)}/></label>
                    <label>Start time: <input type="time" name="startTime" onChange={setValue(setStartTime)}/></label>
                    <button onClick={add()}>Add</button>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>File</th>
                        <th>Start time</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {audioStreams.map((audioStream, i) => 
                        <tr key={i}>
                            <td>{audioStream.file}</td>
                            <td>{audioStream.startTime}</td>
                            <td>
                                <button onClick={remove(audioStream)}>Remove</button>
                                <audio controls><source src={audioStream.file}/></audio>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>))}
        </Styles>
    )
}

export const Admin = 
    withTracker(() => {
        const handle = Meteor.subscribe('AudioStreams.all')
        const userId = Meteor.userId()
        return ({ audioStreams: AudioStreams.find().fetch(), isLoading: !handle.ready(), userId })
    })(AdminInner)


const Styles = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin-bottom: 1rem;
    }

    table {
      border-spacing: 0;
      border: 1px solid grey;
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid grey;
        border-right: 1px solid grey;
        word-break: keep-all;
        :last-child {
          border-right: 0;
        }
      }
    }
`