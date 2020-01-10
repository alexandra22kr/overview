import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/all.css';

import LikeButton from './IconButtons/LikeButton';
import CommentButton from './IconButtons/CommentButton';
import Paragraph from './GeneralStyledComponents/Paragraph';
import TextTitle from './GeneralStyledComponents/TextTitle';
import Input from './GeneralStyledComponents/Input';
import Button from './GeneralStyledComponents/Button';
import ContentItem from './GeneralStyledComponents/ContentItem';
import ContentBlock from './GeneralStyledComponents/ContentBlock';
import ContentItemImage from './GeneralStyledComponents/ContentItemImage';

import { withTheme } from 'styled-components';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';



const Main = () => {
    return (
        // <ThemeProvider theme={{ layout: 'light' }}>
        <Fragment>
        <main className="container">
            <form>
                <Input />
            </form>
                <Button>Sign in</Button>
                <Button size="large" kind="danger">click</Button>
                <Button size="small">click</Button>
                <Button size="large">click</Button>
            
            <LikeButton />
            <CommentButton />
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
            <div className='test-block'>
                <TextTitle>Text</TextTitle>
                <Paragraph>Text text tex text
                    Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </Paragraph>
                <TextTitle>Text</TextTitle>
                <Paragraph>Text text tex text
                    Lorem, ipsum do text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Text text tex t text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Text text tex text
                    Lorem, ipsum dolortext tex texttext tex textt amet consectetur adipisicing elit. Ex consect
                    Lorem, ipsum dolor sit text tex texttext tex texttext tex texttext tex texttext tex texttext tex textamext
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Lorem, ipsum dolor sit amlor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </Paragraph>
                <TextTitle>Text</TextTitle>
                <Paragraph>Text text tex text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Lorem, ipsum dolor s text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Text text tex text
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consect
                    Lorem, ipsum dolor sit amit am
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur accusamus nam expedita mollitia tenetur quaerat. Perferendis ut fuga ratione blanditiis eum sit modi atque reprehenderit, nobis vero expedita ipsam?
                </Paragraph>
            </div>
        
            <div className='colar'>
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
        </Fragment>
        // </ThemeProvider>
    )
}

export default Main;