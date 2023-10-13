import React from 'react'
import { Link } from 'react-router-dom';

const Upproduct = ({ uppcom }) => {
  return (
    <div className='uppo-user padding-80 px-0'>
      <div className="product">
        <table>
          <thead>
            <tr>
              <th className='number'>No.</th>
              <th className='photos'>Photo</th>
              <th>Title</th>
              <th className='price'>Price</th>
              <th className='cates'>category</th>
              <th className='distock'>discount</th>
              <th className='distock'>stock</th>
            </tr>
          </thead>
          <tbody>
            {
              uppcom?.map((e, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td className='photos'><img src={e?.imgurl} /></td>
                    <td><Link to={`/product/${e?.id}`}><h5 className="card-title">{e?.title.slice(0, 30)}</h5></Link></td>
                    <td>{e?.price}</td>
                    <td>{e?.category}</td>
                    <td>{e?.discount}</td>
                    <td>{e?.stock}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Upproduct