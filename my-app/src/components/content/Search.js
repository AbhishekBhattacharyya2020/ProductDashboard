import _ from 'lodash'
import faker from 'faker'
import React, {
    Component
} from 'react'
import styled from 'styled-components'
import {
    Search,
    Grid,
    Button,
    Icon,
    Item,
    Container
} from 'semantic-ui-react'

const SearchWrapper = styled.div `
	margin-top: 30px;
`;

const source = _.times(5, () => ({
    id: faker.random.number(),
    title: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
    availability: faker.random.boolean()
}))

const initialState = {
    isLoading: false,
    results: [],
    value: '',
    index: 0
}

export default class SearchProduct extends Component {
    state = initialState

    handleResultSelect = (e, {
        result
    }) => {
        this.setState({
            value: result.id,
            index: this.state.results.findIndex(x => x.id === result.id)
        });
    }

    handleSearchChange = (e, {
        value
    }) => {
        this.setState({
            isLoading: true,
            value
        })

        setTimeout(() => {
            //if (this.state.value < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.id)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const {
            isLoading,
            value,
            results,
            index
        } = this.state

        return ( <
            ><
            SearchWrapper >
	    <div className="dashboard-title">
                    <h3>Product Details</h3>
                    <hr />
                </div><
            /SearchWrapper >
            <
            SearchWrapper >
            <
            Container >
            <
            Grid >
            <
            Grid.Column width = {
                6
            } >
            <
            Search fluid loading = {
                isLoading
            }
            id = 'sProd'
            placeholder = 'Enter a valid id'
            onResultSelect = {
                this.handleResultSelect
            }
            onSearchChange = {
                _.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })
            }
            results = {
                results
            }
            value = {
                value
            }
            index = {
                index
            } {
                ...this.props
            }
            /> <
            /Grid.Column> <
            /Grid> <
            /Container> <
            /SearchWrapper> <
            SearchWrapper >
            <
            Container >
            <
            Item.Group divided > {
                this.state.results.length > 0 && this.state.results[index] &&
                <
                Item >
                <
                Item.Image src = {
                    this.state.results[index].image
                }
                /> <
                Item.Content >
                <
                Item.Meta >
                <
                span className = 'cinema' > {
                    this.state.results[index].id
                } < /span> <
                /Item.Meta> <
                Item.Header as = 'a' > {
                    this.state.results[index].title
                } < /Item.Header> <
                Item.Description > {
                    this.state.results[index].description
                } < /Item.Description> <
                Item.Meta >
                <
                span className = 'cinema' > {
                    this.state.results[index].price
                } < /span> <
                /Item.Meta> <
                Item.Extra >
                <
                Button primary floated = 'right'
                disabled = {
                    this.state.results[index].availability
                } >
                Add To Cart <
                Icon name = 'cart plus' / >
                <
                /Button> <
                /Item.Extra> <
                /Item.Content>   <
                /Item>
            } <
            /Item.Group> <
            /Container> <
            /SearchWrapper> <
            />
        )
    }
}