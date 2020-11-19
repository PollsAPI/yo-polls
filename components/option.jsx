import { Button, ProgressBar } from 'react-bootstrap'
import React from 'react'

export const Option = ({ voted, selectedOption, setSelectedOption, option, totalVotes }) => {
    const isSelected = option.id === selectedOption
    const icon = isSelected ? 'fa-check-circle' : 'fa-circle'
    const percentage = Math.round((option.votes_count * 100) / totalVotes) || 0
    return (
        <>
            <div
                onClick={() => {
                    !voted && setSelectedOption(option.id)
                }}
                className={'d-flex align-items-center my-4 position-relative'}
            >
                <Button className={'mr-2'} size={'sm'} variant={isSelected ? 'success' : 'info'}>
                    <i className={`fas ${icon}`} />
                </Button>
                <div className={'flex-fill mx-2'}>
                    <p className={'font-weight-bold mb-1 text-left'}>{option.text}</p>
                    <ProgressBar
                        className={'mt-1'}
                        style={{ background: '#EEE', height: 5 }}
                        now={percentage}
                        size={'sm'}
                        variant={isSelected ? 'success' : 'info'}
                    />
                </div>
                <div className={'ml-2 d-flex flex-column align-items-center justify-content-end'}>
                    <span className={'font-weight-bold'}>{percentage}%</span>
                    <span className={'small'}>{option.votes_count} Votes</span>
                </div>
            </div>
        </>
    )
}
