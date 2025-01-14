import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route ,HashRouter} from "react-router-dom";
const About = lazy(() => import("../../pages/about/About"));
const Contact = lazy(() => import("../../pages/contact/Contact"));
const ProductId = lazy(() => import("../../pages/product/ProductId"));
const Accessory = lazy(() => import("../../pages/Accessory/Accessory"));
const PageNotFound = lazy(() => import("../../pages/404/PageNotFound"));
const Product = lazy(() => import("../../pages/product/Product"));
const DezelEngine = lazy(() => import("../../pages/product/Dezelengine"));
const GezelEngine = lazy(() => import("../../pages/product/Gezelengine"));
function MyRoute({language}) {
  return (
    <Routes>
                      <Route index element={<Product  language={language} />} />
                      <Route   path="/"  >
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<Product  language={language} />} />
                        <Route path="dezelengine" element={<DezelEngine />} />
                        <Route path="gezelengine" element={<GezelEngine />} />
                        <Route
                          path="product/:id/:filesNO"
                          element={<ProductId language={language} />}
                        />
                        <Route path="accessory" element={<Accessory />} />
                        <Route path="*" element={<PageNotFound />} />
                      </Route>
                    </Routes>
  )
}

export default MyRoute