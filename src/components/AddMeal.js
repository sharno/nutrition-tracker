import React, { Component } from 'react'
import { Button, Segment, Checkbox, Image, Modal, Form, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class AddMeal extends Component {
    state = {
        name: "",
        time: "",
        img: "",
        serving: {
            vegetable: 0,
            protein: 0,
            fat: 0,
            carb: 0,
            drink: 0,
        },
        error: "",
        openModal: false,
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleServingToggle = (serving) => {
        this.setState({
            serving: {
                ...this.state.serving,
                [serving]: this.state.serving[serving] ? 0 : 1,
            }
        })
    }

    handleServingChange = (e, { name, value }) => {
        if (name === '+') {
            this.setState({
                serving: { ...this.state.serving, [value]: this.state.serving[value] + 1 }
            })
        } else {
            this.setState({
                serving: { ...this.state.serving, [value]: this.state.serving[value] - 1 }
            })
        }
    }

    handleAddMeal = () => {
        if (!this.state.name) {
            this.setState({ error: "Please enter a name for this meal" })
            return
        }
        if (Object.values(this.state.serving).every(s => s === 0)) {
            this.setState({ error: "Please enter at least 1 serving for this meal" })
            return
        }
        this.props.onAddMealClick({
            name: this.state.name,
            time: moment().format(),
            img: this.state.img,
            serving: this.state.serving,
        })
        this.handleCloseModal()
    }

    handleOpenModal = () => {
        this.setState({ openModal: true })
    }

    handleCloseModal = () => {
        this.setState({
            name: "",
            time: "",
            img: "",
            serving: {
                vegetable: 0,
                protein: 0,
                fat: 0,
                carb: 0,
                drink: 0,
            },
            error: "",
            openModal: false,
        })
    }

    handleImageUpload = (e, { value }) => {
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"]
        
        let file = e.target.files[0]
        console.log(file)
        if (file.size > 2000000) {
            this.setState({ error: "The image size is so big, choose an image that's less than 500Kb" })
            return
        } else if (!validImageTypes.includes(file["type"])) {
            this.setState({ error: "This is not a valid image file please choose another image" })
            return
        }
        this.setState({ error: "" })

        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({ img: reader.result })
        }
        reader.onerror = (error) => {
            this.setState({ error: "An error happened while loading the image, please choose another image" })
            console.log('Error: ', error)
        }
    }

    render() {
        return (
            <Modal trigger={<Button primary onClick={this.handleOpenModal}>Add a New Meal</Button>} open={this.state.openModal} onClose={this.handleCloseModal}>
                <Modal.Header>Add a New Meal</Modal.Header>
                <Modal.Content image scrolling>
                    <Image wrapped size='medium' src={this.state.img || '/assets/images/meal.png'} />
                    <Modal.Description>
                        <Form error={this.state.error !== ""}>
                            <Segment.Group>
                                <Segment>
                                    <Form.Input label='Meal Name' placeholder='Meal Name' name='name' value={this.state.name} onChange={this.handleChange} />
                                    <Button.Group>
                                        <Button name='name' value='Breakfast' content='Breakfast' onClick={this.handleChange} />
                                        <Button name='name' value='Lunch' content='Lunch' onClick={this.handleChange} />
                                        <Button name='name' value='Dinner' content='Dinner' onClick={this.handleChange} />
                                        <Button name='name' value='Snack' content='Snack' onClick={this.handleChange} />
                                    </Button.Group>
                                </Segment>
                                <Segment>
                                    <Form.Input label='Upload Image for the meal' type='file' placeholder='Upload Image...' onChange={this.handleImageUpload} />
                                </Segment>
                                {Object.keys(this.state.serving).map(s =>
                                    <Segment.Group horizontal key={s}>
                                        <Segment padded>
                                            <Checkbox toggle label={s} checked={this.state.serving[s] > 0} onChange={() => this.handleServingToggle(s)} />
                                        </Segment>
                                        {this.state.serving[s] ?
                                            <Segment textAlign='right' size="mini">
                                                <Button.Group>
                                                    <Button negative icon='minus' name='-' value={s} onClick={this.handleServingChange} />
                                                    <Button.Or text={this.state.serving[s]} />
                                                    <Button positive floated='right' icon='plus' name='+' value={s} onClick={this.handleServingChange} />
                                                </Button.Group>
                                            </Segment> : ""
                                        }
                                    </Segment.Group>
                                )}
                                <Segment textAlign='right'>
                                    <Message
                                        error
                                        header='Missing info'
                                        content={this.state.error}
                                    />
                                    <Button primary onClick={this.handleAddMeal}>Add Meal</Button>
                                </Segment>
                            </Segment.Group>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

AddMeal.propTypes = {
    onAddMealClick: PropTypes.func.isRequired,
}