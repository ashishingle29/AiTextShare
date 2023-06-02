import React from "react";
import "./Youtube.css";

class Search extends React.Component {
    state = { title: "" };
    onSearchChanged = (event) => {
        const _title = event.target.value;
        this.setState({ title: _title });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    };
    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className="Footer">
                    
                        <input
                        className="Search"
                            id="video-search"
                            type="text"
                            value={this.state.title}
                            onChange={this.onSearchChanged}
                            placeholder="Enter Search Keyword"
                        />
                  
                </form>
            </>
        );
    }
}

export default Search;
