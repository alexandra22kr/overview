import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../css/all.css';

import LikeButton from '../IconButtons/LikeButton';
import CommentButton from '../IconButtons/CommentButton';
import Paragraph from '../GeneralStyledComponents/Paragraph';
import TextTitle from '../GeneralStyledComponents/TextTitle';
import Input from '../GeneralStyledComponents/Input';
import Button from '../GeneralStyledComponents/Button';
import ContentItem from '../GeneralStyledComponents/ContentItem';
import ContentBlock from '../GeneralStyledComponents/ContentBlock';
import ContentItemImage from '../GeneralStyledComponents/ContentItemImage';

import { withTheme } from 'styled-components';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';



const CreateMain = () => {
    return (
        // <ThemeProvider theme={{ layout: 'light' }}>
        <main className="container">
            <div className='colar'>
                <h3>Create Main</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
            </div>
            <div className='pink'>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
            </div>
            <div className='yellow'>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
            </div>
            <div className='blue'>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <h3>Text</h3>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
                <p>Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </p>
            </div>
        </main>
        // </ThemeProvider>
    )
}

export default CreateMain;