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



const GalleryMain = () => {
    return (
        // <ThemeProvider theme={{ layout: 'light' }}>
        <main className="container">
      
        <ContentBlock>
                <ContentItem>
                    <ContentItemImage src="https://images.pexels.com/photos/954364/pexels-photo-954364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <TextTitle>Text</TextTitle>
                    <Paragraph>Text text tex text
                        Text text tex text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                    </Paragraph>
                    <LikeButton />
                </ContentItem>
                <ContentItem>
                    <ContentItemImage src="https://cdn.pixabay.com/photo/2019/09/27/15/26/pomegranate-4508741_960_720.jpg" />
                    <TextTitle>Text</TextTitle>
                    <Paragraph>Text text tex text
                        Text text tex text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                    </Paragraph>
                </ContentItem>
                <ContentItem>
                    <ContentItemImage src="https://www.eg.ru/wp-content/uploads/2017/07/48315940320111215.jpg" />
                    <TextTitle>Text</TextTitle>
                    <Paragraph>Text text tex text
                        Text text tex text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                    </Paragraph>
                </ContentItem>
                <ContentItem>
                    <ContentItemImage src="https://politinfo.com.ua/wp-content/uploads/2018/01/ol.jpg" />
                    <TextTitle>Text</TextTitle>
                    <Paragraph color="var(--blue-color)">Text text tex text
                        Text text tex text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                    </Paragraph>
                    <LikeButton />
                </ContentItem>
                <ContentItem>
                    <ContentItemImage src="https://cdn.pixabay.com/photo/2019/09/29/15/45/cabbage-4513641_960_720.jpg" />
                    <TextTitle>Text</TextTitle>
                    <Paragraph>Text text tex text
                        Text text tex text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                    </Paragraph>
                    <LikeButton />
                </ContentItem>
            </ContentBlock>
        </main>
        // </ThemeProvider>
    )
}

export default GalleryMain;