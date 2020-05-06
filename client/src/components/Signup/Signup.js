import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
            username:' ',
        }
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username : this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:4000/api/users/add', user)
        .then(res => console.log(res.data))
        this.setState({
            username :''
        })
    }
    render() {
        return (
            <section id="main-content">
        <section className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="page-header"><i className="fa fa-file-text-o" /> Form elements</h3>
              <ol className="breadcrumb">
                <li><i className="fa fa-home" /><a href=" ">Home</a></li>
                <li><i className="icon_document_alt" />Forms</li>
                <li><i className="fa fa-file-text-o" />Form elements</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  Form Elements
                </header>
                <div className="panel-body">
                  <form onSubmit ={this.onSubmit} className="form-horizontal " method="get">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Username</label>
                      <div className="col-sm-10">
                        <input type="text"  value ={this.state.username} onChange={this.onChangeUsername} className="form-control" />
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Địa chỉ</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="inputSuccess">Ngày sinh</label>
                         <input type="date" id="birthday" name="birthday" />
                      </div>
                      <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="inputSuccess">Thành phố</label>
                      <div className="col-lg-10">
                        <select className="form-control m-bot15">
                            <option value={ 1}>Tỉnh/Thành phố</option>
                            <option value={1}>Dhaka</option>
                            <option value={1}>Dilli</option>
                            <option value={1}>Newyork</option>
                            <option value={1}>Islamabad</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                      <label className="control-label col-lg-2" htmlFor="inputSuccess">Quận/Huyện</label>
                      <div className="col-lg-10">
                        <select className="form-control m-bot15">
                            <option value={ 1}>Quận/Huyện</option>
                            <option value={1}>Bangladesh</option>
                            <option value={1}>India</option>
                            <option value={1}>England</option>
                            <option value={1}>Srilanka</option>
                          </select>
                        </div>
                      </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="inputSuccess">Hình ảnh</label>
                        <div className="col-lg-10">
                        <input type="file" id="exampleInputFile" />
                        </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Số điện thoại</label>
                        <div className="col-lg-10">
                            <input id="dp1" type="text" defaultValue=" " size={16} className="form-control" />
                          </div>
                    </div> */}
                     {/* <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember
                      </label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Hoàn tất</button>
                  </form>
                </div>
              </section>             
            </div>
          </div>
        </section>
      </section>
        );
    }
}

export default Signup;