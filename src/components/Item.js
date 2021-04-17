import React from 'react';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css';

const Item = ({
	title,
	desc,
	backgroundImg,
	leftBtnText,
	rightBtnText,
	first,
	twoButtons,
}) => {
	return (
		<div
			className='item'
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<div className='item__container'>
				<div className='item__text'>
					<p>{title}</p>
					<div className='item__desc'>
						<p>{desc}</p>
					</div>
				</div>

				<div className='item__lowerThird'>
					<div className='item__buttons'>
						<Button imp='primary' text={leftBtnText} />
						{twoButtons && <Button imp='secondary' text={rightBtnText} />}
					</div>
					{first && (
						<div className='item__expand'>
							<ExpandMoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Item;
