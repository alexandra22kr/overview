import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import LikeButton from '../IconButtons/LikeButton';
import CommentButton from '../IconButtons/CommentButton';
import Paragraph from '../GeneralStyledComponents/Paragraph';
import TextTitle from '../GeneralStyledComponents/TextTitle';
import Header from '../../components/Header';
import Input from '../GeneralStyledComponents/Input';
import Button from '../GeneralStyledComponents/Button';
import ContentItem from '../GeneralStyledComponents/ContentItem';
import ContentBlock from '../GeneralStyledComponents/ContentBlock';
import ContentItemImage from '../GeneralStyledComponents/ContentItemImage';
import GalleryMain from './GalleryMainContent';

import { withTheme } from 'styled-components';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
import Footer from '../Footer';

const Gallery = () => {
    return(
        <Fragment>
            <Header />
            <GalleryMain />
            <Footer />
        </Fragment>
    );
};


export default Gallery;