import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocalStorage } from '../utils/useLocalStorage'
import { addVote } from '../utils/connector'
import { Option } from './option'

export const Poll = ({ data }) => {
    let { question, options, id } = data
    // Use local storage to avoid duplicated votes
    const [voted, setVoted] = useLocalStorage(`poll_vote_${id}`)
    const [selectedOption, setSelectedOption] = useState(voted)
    const vote = () => {
        if (selectedOption && voted !== undefined) {
            // Update the options rather than fetch the poll again
            options = options.map(option => {
                if (option.id === selectedOption) {
                    option.votes_count += 1
                }
                return option
            })
            setVoted(selectedOption)
            addVote({
                poll_id: id,
                option_id: selectedOption,
            }).then(() => console.log('Vote created!'))
        }
    }
    return (
        <>
            <div className={'position-absolute m-3'} style={{ top: 0, right: 0 }}>
                <a href={'#share-poll'} className={'bg-warning badge-pill text-dark d-flex align-items-center'}>
                    <i className={'fas fa-share-square small mr-2'} />
                    Share
                </a>
            </div>
            <p className={'font-weight-bold h4'}>{question}</p>
            <div>
                {options.map(option => (
                    <Option
                        key={option.id}
                        option={option}
                        voted={!!voted}
                        totalVotes={options.reduce((acc, options) => acc + options.votes_count, 0)}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                ))}
                <div className={'mt-5'}>
                    <SubmitSection hasVoted={!!voted} vote={vote} />
                </div>
            </div>
        </>
    )
}

const SubmitSection = ({ hasVoted, vote }) => {
    return (
        <>
            {hasVoted ? (
                <h3 className={'font-weight-bolder text-center'}>🎉 Voted</h3>
            ) : (
                <Button onClick={vote} block variant={'info'}>
                    <span className={'font-weight-bolder'}>Vote ✌️</span>
                </Button>
            )}
        </>
    )
}
