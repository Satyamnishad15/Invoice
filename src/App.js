import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div id="invoice">
        <h3 className="center-heading">Tax Invoice</h3>
        <table className="first-table">
          <tbody>
            <tr>
              <td>
                <h2 className="head-1"><u>360° Enterprises</u></h2>
                <p>Near Upes, Bidholi, UK - 248007</p>
                <p><b>GST-IN: 01ABCDEFGHI</b></p>
                <p>Phone: 9889XXXXXX</p>
                <p>E-Mail: 360.enterprises@gmail.com</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="in-table">
          <tbody>
            <tr>
              <th>Invoice Id</th>
              <th>Invoice Dated</th>
              <th>Reference Id <small>[if any]</small></th>
            </tr>
            <tr>
              <td>2023/SN/10</td>
              <td id="datex">01/12/2023</td>
              <td>ABC1531</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="ref-table">
          <tbody>
            <tr>
              <th>Buyer <small>(bill to)</small></th>
              <th>Consignee <small>(ship to)</small></th>
            </tr>
            <tr>
              <td className="customer_i">Satyam Nishad</td>
              <td className="customer_i">Satyam Nishad</td>
            </tr>
            <tr>
              <td className="address_i">Sitapur(UP)</td>
              <td className="address_i">Sitapur(UP)</td>
            </tr>
            <tr>
              <td>GST-IN: 02ABCDEFGH</td>
              <td>GST-IN: 04CDCDCDCD</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>HSN</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>GST</th>
              <th>Taxable Amount</th>
              <th>GST Amount</th>
              <th>SubTotal</th>
            </tr>
            <tr>
              <td id="product_i">Pen</td>
              <td id="hsn_i">1234</td>
              <td className="qty_i">10</td>
              <td className="rate_i">20</td>
              <td className="gst_i">12%</td>
              <td className="tax_a">200</td>
              <td className="gst_a">24</td>
              <td className="total">224</td>
            </tr>
            <tr>
              <td id="product_i">Notebook</td>
              <td id="hsn_i">2234</td>
              <td className="qty_i">5</td>
              <td className="rate_i">120</td>
              <td className="gst_i">12%</td>
              <td className="tax_a">600</td>
              <td className="gst_a">72</td>
              <td className="total">672</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Total Taxable Amount</th>
              <th>Total GST Amount</th>
              <th>Rounded Off</th>
              <th>Grand Total</th>
            </tr>
            <tr className="total-row">
              <td className="tax_a">800</td>
              <td className="gst_a">96</td>
              <td id="rdoff">0.0</td>
              <td className="total">896</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Mode of Delivery</th>
              <td>MANUAL DELIVERY</td>
            </tr>
          </tbody>
        </table>
        <div className="terms-block">
          <p className="terms-description">
            Note:
            <br />- Points are rounded off.
            <br />- Subject to "UK" jurisdiction only.
            <br />- Terms and Conditions Apply.
          </p>
        </div>
        <div className="signature-block">
          <p className="signature-title">For 360° Enterprises</p>
          <p className="signature-name">
            <small>Authorised Signatory</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;