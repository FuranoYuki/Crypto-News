import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../Services/cryptoApi";

import { Loader } from "../Loader";

type Props = {
  simplified?: boolean;
};

export function CryptoCurrencies({ simplified }: Props): JSX.Element {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptos, cryptosList]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search crypto currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos
          ?.filter((coin: any) =>
            searchTerm === ""
              ? coin
              : coin.name.toLowerCase().includes(searchTerm.toLowerCase())
              ? coin
              : null
          )
          .map((currency: any) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.id}
            >
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
}
