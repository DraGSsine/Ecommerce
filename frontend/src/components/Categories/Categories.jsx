import React from 'react'
import './Categories.scss'
import womenCategoryImage from '../../assets/images/category-women.png'
import kidsCategoryImage from '../../assets/images/category-kids.jpg'
import menCategoryImage from '../../assets/images/category-men.jpg'
import accessoriesCategoryImage from '../../assets/images/category-accessories.jpg'
import cosmeticsCategoryImage from '../../assets/images/category-cosmetics.jpg'
import { Link } from 'react-router-dom'
function Categories() {
    return (
        <div className='categories'>
            <div className='womenCategory category'>
                <img src={womenCategoryImage} />
                <div className='womenfashion'>
                    <h1>women's Fashion</h1>
                    <span>We have he most stlidh and beutiy colth and with a fiar price  what are you waiting for vklik an buy now </span>
                    <Link to='products/women'>

                        <button>Shop now</button>
                    </Link>

                </div>
            </div>
            <div className='kidsCategory category'>
                <img src={kidsCategoryImage} />
                <div className='categoryInfo'>
                    <h1>kid's Fashion</h1>
                    <span>308 items</span>
                    <Link to='products/kids'>

                        <button>Shop now</button>
                    </Link>

                </div>
            </div>
            <div className='menCategory category'>
                <img src={menCategoryImage} />
                <div className='categoryInfo'>
                    <h1>Men's Fashion</h1>
                    <span>198 items</span>
                    <Link to='products/men'>

                        <button>Shop now</button>
                    </Link>

                </div>
            </div>
            <div className='accessoriesCategory category'>
                <img src={accessoriesCategoryImage} />
                <div className='categoryInfo'>
                    <h1>accessories</h1>
                    <span>78 items</span>
                    <Link to='products/accessories'>

                        <button>Shop now</button>
                    </Link>

                </div>
            </div>

            <div className='cosmeticsCategory category'>
                <img src={cosmeticsCategoryImage} />
                <div className='categoryInfo'>
                    <h1>kcosmetics</h1>
                    <span>127 items</span>
                    <Link to='products/cosmetics'>
                        <button>Shop now</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Categories