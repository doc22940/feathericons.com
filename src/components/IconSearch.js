import React from 'react'
import { icons } from 'feather-icons'

import search from '../utils/search'
import SearchInput from './SearchInput'
import IconGrid from './IconGrid'
import NoResults from './NoResults'

const ICON_COUNT = Object.keys(icons).length

class IconSearch extends React.Component {
  state = {
    inputValue: '',
  }

  handleInputChange = event => this.setState({ inputValue: event.target.value })

  render() {
    const results = getResults(this.state.inputValue)

    return (
      <div>
        <SearchInput
          placeholder={`Search ${ICON_COUNT} icons`}
          label="Search"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          mb={5}
        />
        {results.length !== 0 ? (
          <IconGrid icons={results} />
        ) : (
          <NoResults value={this.state.inputValue} />
        )}
      </div>
    )
  }
}

function getResults(value) {
  return search(Object.values(icons), value, { keys: ['name', 'tags'] })
}

export default IconSearch
