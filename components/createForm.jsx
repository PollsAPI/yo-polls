import { Alert, Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import React, { useState } from 'react'
import * as yup from 'yup'
const InitialOptions = ['', '']
const validationSchema = yup.object().shape({
    question: yup.string().required(),
    options: yup
        .array(yup.object().shape({ text: yup.string().required() }).required())
        .required()
        .min(2),
})

export const CreatePollForm = ({ submit, loading, serverError }) => {
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState(InitialOptions)
    const [error, setError] = useState(null)
    const addOption = () => {
        setOptions([...options, ''])
    }
    const removeOption = index => {
        // State is immutable so let's keep it that way
        const temp = [...options]
        temp[index] = undefined
        setOptions(temp)
    }
    const updateOption = (index, text) => {
        const temp = [...options]
        temp[index] = text
        setOptions(temp)
    }
    const onSubmit = () => {
        setError(null)
        const filteredOptions = options.filter(value => value !== undefined && value !== '')
        const pollData = {
            question,
            options: filteredOptions.map(text => ({ text })),
        }
        try {
            if (validationSchema.validateSync(pollData)) {
                submit(pollData)
            }
        } catch (e) {
            setError(`${e.name}: ${e.message}`)
        }
    }
    return (
        <Form>
            {(error || serverError) && <Alert variant={'danger'}>{error || serverError}</Alert>}
            <Form.Group controlId="question">
                <Form.Label className={'font-weight-bold'}>🧐 Question</Form.Label>
                <Form.Control
                    defaultValue={question}
                    onChange={e => setQuestion(e.target.value)}
                    type="text"
                    placeholder="Enter question"
                />
            </Form.Group>
            <hr />
            <label className={'font-weight-bold'}>💟 Options</label>
            {options.map((value, index) => {
                if (value === undefined) return null
                return (
                    <InputGroup key={`${index}`} className={'form-group'}>
                        <Form.Control
                            type="text"
                            onChange={e => updateOption(index, e.target.value)}
                            className={'flex-fill'}
                            placeholder={`Option ${index + 1}`}
                        />
                        {index > 1 && (
                            <InputGroup.Append>
                                <Button variant={'danger'} onClick={() => removeOption(index)}>
                                    X
                                </Button>
                            </InputGroup.Append>
                        )}
                    </InputGroup>
                )
            })}
            <div className={'d-flex justify-content-start'}>
                <Button onClick={addOption} className={'font-weight-bold'} size={'sm'} variant={'outline-dark'}>
                    <i className={'fas fa-plus'} /> Add
                </Button>
            </div>
            <Button
                className={'mt-4 align-items-center shadow font-weight-bold justify-content-center d-flex'}
                block
                variant="info"
                disabled={loading}
                onClick={onSubmit}
            >
                ✌️ Create {loading && <Spinner className="ml-2" size={'sm'} animation="border" variant="white" />}
            </Button>
        </Form>
    )
}
