import React, {useState} from 'react';
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import { useDeleteProductMutation, useGetProductQuery} from '../../../redux/reducers/productsApi';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/reducers/products';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../../redux/reselect';
import axios from 'axios';




const ProductItem = ({item}) => {

    const dispatch = useDispatch();

    const { data, filter }  = useSelector(productsSelector);


    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
   
    

    const [deleteProduct] = useDeleteProductMutation();
    const handleDeleteProduct = async (id) => {
         await deleteProduct(id).unwrap();
    }

    const changeProduct = (id)=>{   
        axios.patch(`http://localhost:8080/products/${id}`, {
          title,
          price,
        }).then((res)=> dispatch(getAllProducts(data, filter)))

      }

    return (
        <li className='adminProducts__item adminProducts__item-row'>
            <img className='adminProducts__item-img' src={item.image} alt={item.title} />
                                
            <div className='adminProducts__item-info'>
                <p className='adminProducts__item-category'>Категория: {item.category}</p>
                <p className='adminProducts__item-category'>
                    {item.categories && `Податегория: ${item.categories}`}
                </p>

                {
                    active ? <input className='adminProducts__item-title adminProducts__item-title-field' type="text" value={title} onChange={(e)=>
                        setTitle(e.target.value)
                    } placeholder='Измените название'/>
                    : <p className='adminProducts__item-title'>Название: {item.title}</p>
                }

                {
                    active ? <input className='adminProducts__item-price adminProducts__item-price-field' type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Цена'/>
                    : <p className='adminProducts__item-price'>Цена: {item.price} Сом</p>
                }
                
                    <p className='adminProducts__item-weight'>
                    {item.weight && `Вес: ${item.weight} гр`}
                    </p>

                    {
                    active ? <input className='adminProducts__item-ingridints adminProducts__item-ingridints-field' type="text" 
                     placeholder='Введите ингридиенты ч/з запятую'/>
                    : <p className='adminProducts__item-ingridints'>
                        {item.ingridints && `Ингридиенты: ${item.ingridints}`}
                        </p>
                }
                
                {
                    active ? <input className='adminProducts__item-compound adminProducts__item-compound-field' type="text" placeholder='Состав сета ч/з запятую'/>
                    : <p className='adminProducts__item-ingridints'>
                        {item.compound && `Состав сета: ${item.compound}`}
                        </p>
                }
                    
                    <p className='adminProducts__item-quantity'>
                    {item.quantity && `Кол кусочков: ${item.quantity}`}
                    </p>
            </div>

        

            <div className="adminProducts__btns">
                {
                    active ? <button className='adminProducts__item-btn btn' onClick={()=>{
                        changeProduct(item.id)
                        setActive(!active)
                    }}><FaPencilAlt style={{fill: 'white', fontSize: '18px'}}/></button>
                    : <button onClick={()=> setActive(!active)} className='adminProducts__item-btn btn' type='button'>
                    <FaPencilAlt style={{fill: 'white', fontSize: '18px'}}/>
                </button>
                }
                
                <button onClick={()=> handleDeleteProduct(item.id)} className='adminProducts__item-btn btn' type='button'>
                    <FaTrashAlt fill='white' fontSize={'18px'}/>
                </button>
            </div>
        
    </li>
    );
};

export default ProductItem;