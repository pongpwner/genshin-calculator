import React from 'react';
import './content-container.styles.css'
import MainSection from '../main-section/main-section.component';

const ContentContainer=({content})=>(
    <div className='content-container'>
        {
            content.map(contentSection=>(
                <MainSection subSections={content.inputSection}></MainSection>
            )
            )
        }
    </div>
)
export default ContentContainer;