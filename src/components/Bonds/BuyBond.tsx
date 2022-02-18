import React, { useEffect, useState } from "react";
import { Button, VStack, Text, Code, Divider } from "@chakra-ui/react";
import './BuyBond.css';
import useBonds from './hooks';

export function BuyBond() {
  const { buyBond } = useBonds();

  return (
    <>
       <div className="content">
                <div className="row">
                    <div className="col-lg-12">
						<div className="crypto-exchange buy-form">
							<div className="">
								<div className="card-title text-center">
									<h4 className="text-primary">Bond: FRAX</h4>
								</div>

                <div>
                <div className="row">
                      <div className="col-lg-6 text-center card-title">
                        <h4  className="text-primary">Bond Price</h4>
                        <h2 className="text-primary">$3.03</h2>
                      </div>
                      <div className="col-lg-6 text-center card-title">
                        <h4  className="text-primary">Market Price</h4>
                        <h2 className="text-primary">$3.01</h2>
                      </div>
                    </div>
                    
                </div>
								<div className="row">
               


									<div className="col-lg-12 ">
										<div className="exchange-form">
											<form>
												<div className="form-row ">
													<div className="col-lg-6 col-md-12 offset-lg-3">
                          <Button className="btn btn-primary btn-lg btn-block" onClick={buyBond}>
                            Buy
                          </Button>
														
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>

              <div className="row">
              <div className="col-lg-12 details-contatiner">
                    <div className="row">
                      <div className="col-lg-6 ">Your Balance</div>
                      <div className="col-lg-6 text-right">0 FRAX</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">Duration</div>
                      <div className="col-lg-6 text-right">5 days</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">ROI</div>
                      <div className="col-lg-6 text-right">3%</div>
                    </div>
                    
                  </div>
              </div>

							</div>
						</div>
                    </div>
                </div>
            </div>
    </>
  );
}
