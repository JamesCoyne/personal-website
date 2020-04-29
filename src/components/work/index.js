import React, { useState } from 'react'
import datajson from '../../work.json';
import Project from './project'
import Heading from '../heading/index';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';

function Work(props) {

    const [data, setData] = useState(datajson);

    const selectStyle = {
        container: () => ({
            border: '1px solid white',
            width: '30%',
            marginLeft: '35%',
            marginTop: '5vh',
            fontFamily: 'Source-Code-Regular',
            color: 'white'
        }),
        menu: (provided, state) => ({
            position: 'absolute',
            width: '30%',
            border: '1px solid white'
        }),
        option: (provided, state) => ({
          ...provided,
          background: 'black',
          borderTop: '1px dashed white',
          color: state.isSelected ? 'red' : 'white',
          padding: 10,
        }),
        control: () => ({
        }),
        multiValue: () => ({
            background: 'black',
            border: '1px solid white',
            color: 'white',
            margin: '5px 5px 5px 5px',
            paddingLeft: '7px',
            paddingRight: '7px'
        }),
        multiValueLabel: () => ({
            color: 'white'
        }),
        multiValueRemove: () => ({
            color: 'white'
        }),
        clearIndicator: () => ({
            color: 'white',
            width: '10px',
            display: 'none'
        }),
        dropdownIndicator: () => ({
            color: 'white',
            borderBottom: '1px solid white'
        }),
        indicatorsContainer: () => ({

        }),
        indicatorSeparator: () => ({

        }),
        placeholder: () => ({
            color: 'white'
        })
      }

    var tags = [];
    var tempTags = [];
    datajson.forEach(project => {
        project.tags.forEach(tag => {
            if(tempTags.indexOf(tag) == -1){
                tempTags.push(tag);
            }
        })
    })
    tempTags.forEach(tag => { tags.push({label: tag, value: tag}) })

    var handleInputChange = (tags) => {
        var trimmedData = []
        if(tags){
            datajson.forEach(project => {
                project.tags.forEach(projectTag => {
                    tags.forEach(selectedTag => {
                        if(projectTag == selectedTag.value)trimmedData.push(project)
                    })
                })
            })
        }
        else trimmedData = datajson;
        setData(trimmedData);
    };

    return(
        <div> 
            <Heading text="Work "/>
            <Select 
                className="select"
                options={tags} 
                isMulti 
                onChange={handleInputChange}
                styles={selectStyle}
                placeholder="filter by..."
                theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: 'hotpink',
                      primary: 'black',
                    },
                  })}
                />

            <div className="projectsBody">
                {data.map((project) => (<Project project={project} />)) } 
            </div>
        </div>
    );
}

export default Work;