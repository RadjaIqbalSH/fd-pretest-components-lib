import { jsxs, jsx } from 'react/jsx-runtime';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Card = function (_a) {
    var keyIndex = _a.keyIndex, className = _a.className, starIcon = _a.starIcon, starIconFill = _a.starIconFill, data = _a.data;
    return (jsxs("div", __assign({ className: ['h-fit rounded-lg bg-white', className, data.skinType ? 'px-4 py-8' : ''].join(' ') }, { children: [jsx("div", __assign({ className: "aspect-square w-full bg-white relative" }, { children: jsx("img", { className: "w-full h-full object-contain", src: data.productUrl, alt: "Product image" }) })), data.skinType && (jsx("p", __assign({ className: "w-full font-semibold text-sm mt-4 text-red-500 truncate" }, { children: data.skinType }))), jsxs("div", __assign({ className: "flex items-center space-x-2 mt-2" }, { children: [jsx("p", { children: data.rate }), jsx("div", __assign({ className: "flex items-center" }, { children: Array.from(Array(5), function (value, index) {
                            if (index + 1 <= data.stars)
                                return jsx("span", { children: starIconFill }, index);
                            else
                                return jsx("span", { children: starIcon }, index);
                        }) })), jsxs("p", { children: ["(", data.reviews, ")"] })] })), jsx("p", __assign({ className: "mt-2 w-full text-lg font-bold truncate " }, { children: data.productName })), jsx("p", __assign({ className: "w-full line-clamp-2" }, { children: data.productDescription })), jsx("p", __assign({ className: "w-full truncate text-black-300" }, { children: data.productColor }))] }), keyIndex));
};

var Ads = function (_a) {
    var label = _a.label, label2 = _a.label2, className = _a.className;
    return (jsxs("div", __assign({ className: [
            'bg-black-100 border-2 border-black-200 flex flex-col items-center justify-center',
            className,
        ].join(' ') }, { children: [jsx("p", __assign({ className: "text-2xl font-bold text-black-400" }, { children: label })), label2 && jsx("p", __assign({ className: "text-2xl font-bold text-black-400" }, { children: label2 }))] })));
};

var ArticleCard = function (_a) {
    var keyIndex = _a.keyIndex, className = _a.className, data = _a.data;
    return (jsxs("div", __assign({ className: className }, { children: [jsx("div", __assign({ className: "aspect-video w-full bg-black-100 rounded-xl relative overflow-hidden cursor-pointer" }, { children: jsx("img", { className: "object-cover object-top w-full h-full", src: data.articleUrl, alt: "Article image" }) })), jsxs("div", __assign({ className: "w-full h-fit bg-gray-200 pt-4" }, { children: [jsx("p", __assign({ className: "w-fit max-w-full text-2xl font-semibold hover:text-red-500 cursor-pointer truncate" }, { children: data.title })), jsxs("div", __assign({ className: "mt-2 flex space-x-2" }, { children: [jsx("p", __assign({ className: "truncate" }, { children: data.userName })), jsx("p", __assign({ className: "text-black-200" }, { children: "|" })), jsx("p", __assign({ className: "text-black-200" }, { children: data.publish }))] }))] }))] }), keyIndex));
};

var Brands = function (_a) {
    var brandSrc = _a.brandSrc;
    return (jsx("div", __assign({ className: "w-[160px] h-fit rounded-lg bg-white" }, { children: jsx("div", __assign({ className: "aspect-square w-full bg-white relative" }, { children: jsx("img", { className: "w-full h-full object-contain", src: brandSrc, alt: "Brand image" }) })) })));
};

var GroupCard = function (_a) {
    var keyIndex = _a.keyIndex, className = _a.className, icon1 = _a.icon1, icon2 = _a.icon2, icon3 = _a.icon3, data = _a.data;
    return (jsxs("div", __assign({ className: [
            'flex flex-col items-center p-8 bg-white rounded-lg drop-shadow-xl',
            className,
        ].join(' ') }, { children: [jsx("div", __assign({ className: "w-40 h-40 rounded-full bg-red-200" }, { children: jsx("img", { className: "w-full h-full object-center object-cover", src: data.avatarUrl, alt: "group avatar" }) })), jsx("p", __assign({ className: "mt-4 text-xl font-bold w-full text-center truncate" }, { children: data.title })), jsxs("div", __assign({ className: "w-full mt-8 flex items-center justify-around" }, { children: [icon1, icon2, icon3] })), jsx("p", __assign({ className: "w-full text-sm text-center mt-2 line-clamp-2" }, { children: data.description }))] }), keyIndex));
};

var ReviewCard = function (_a) {
    var keyIndex = _a.keyIndex, className = _a.className, starIcon = _a.starIcon, starIconFill = _a.starIconFill, data = _a.data;
    var showStatus = true;
    var handleShow = function (id) {
        var productDescription = document.getElementById("product-description-".concat(id));
        var readMore = document.getElementById("read-more-".concat(id));
        if (showStatus) {
            readMore.innerHTML = 'Read Less';
            productDescription === null || productDescription === void 0 ? void 0 : productDescription.classList.remove('line-clamp-4');
        }
        else {
            readMore.innerHTML = 'Read More';
            productDescription === null || productDescription === void 0 ? void 0 : productDescription.classList.add('line-clamp-4');
        }
        showStatus = !showStatus;
    };
    return (jsxs("div", __assign({ className: [
            'mb-20 px-4 pt-4 pb-10 border-2 border-gray-50 rounded-lg relative',
            className,
        ].join(' ') }, { children: [jsxs("div", __assign({ className: "w-full h-fit absolute left-0 -bottom-20 flex flex-col items-center" }, { children: [jsx("div", __assign({ className: "w-14 h-14 rounded-full bg-gray-50 relative overflow-hidden" }, { children: jsx("img", { className: "w-full h-full object-cover", src: data.avatarUrl, alt: "Avatar" }) })), jsx("p", __assign({ className: "mt-2 w-full truncate text-center" }, { children: data.name })), jsx("p", __assign({ className: "w-full truncate text-center" }, { children: data.title }))] })), jsxs("div", __assign({ className: "w-full h-20 flex space-x-4" }, { children: [jsx("div", __assign({ className: "flex-none w-20 h-20 bg-white relative overflow-hidden rounded-lg" }, { children: jsx("img", { className: "w-full h-full object-contain", src: data.productUrl, alt: "Product image" }) })), jsxs("div", __assign({ className: "flex-none w-[60%] h-20" }, { children: [jsx("p", __assign({ className: "mt-2 text-xl font-semibold w-full truncate hover:text-red-500 cursor-pointer" }, { children: data.productName })), jsx("p", __assign({ className: "mt-0 w-full truncate" }, { children: data.productBrand }))] }))] })), jsx("div", { className: "border-t-2 mt-4 border-gray-50" }), jsxs("div", __assign({ className: "mt-2 flex items-center justify-between" }, { children: [jsx("div", __assign({ className: "flex items-center" }, { children: Array.from(Array(5), function (value, index) {
                            if (index + 1 <= data.stars)
                                return jsx("span", { children: starIconFill }, index);
                            else
                                return jsx("span", { children: starIcon }, index);
                        }) })), jsx("p", __assign({ className: "text-gray-100 text-sm" }, { children: data.publish }))] })), jsx("p", __assign({ id: "product-description-".concat(keyIndex), className: "mt-2 text-sm line-clamp-4" }, { children: data.productDescription })), jsx("button", __assign({ id: "read-more-".concat(keyIndex), className: "mt-2 text-sm text-red-400 hover:text-red-500", onClick: function () { return handleShow(keyIndex); } }, { children: "Read more" }))] }), keyIndex));
};

var TopAvatarCard = function (_a) {
    var keyIndex = _a.keyIndex, className = _a.className, starIcon = _a.starIcon, starIconFill = _a.starIconFill, data = _a.data;
    return (jsxs("div", __assign({ className: [
            'h-fit rounded-lg border-2 border-gray-50 relative mt-12 px-4 py-8',
            className,
        ].join(' ') }, { children: [jsxs("div", __assign({ className: "flex space-x-2 w-full h-14 pl-4 absolute -top-[48px] left-0" }, { children: [jsx("div", __assign({ className: "w-14 h-full rounded-full relative overflow-hidden border-2 border-gray-50" }, { children: jsx("img", { className: "w-full h-full object-cover object-center bg-white", src: data.avatarUrl, alt: "Author Image", title: "Author Image" }) })), jsxs("div", __assign({ className: "h-full" }, { children: [jsx("p", __assign({ className: "w-24 truncate font-semibold" }, { children: data.name })), jsx("p", __assign({ className: "w-24 truncate font-semibold text-xs text-black-200" }, { children: data.title }))] }))] })), jsx("div", __assign({ className: "aspect-square w-full bg-white relative" }, { children: jsx("img", { className: "w-full h-full object-contain object-center", src: data.productUrl, alt: "Product image" }) })), jsxs("div", __assign({ className: "flex items-center space-x-2 mt-4" }, { children: [jsx("p", { children: data.rate }), jsx("div", __assign({ className: "flex items-center" }, { children: Array.from(Array(5), function (value, index) {
                            if (index + 1 <= data.stars)
                                return jsx("span", { children: starIconFill }, index);
                            else
                                return jsx("span", { children: starIcon }, index);
                        }) })), jsxs("p", { children: ["(", data.reviews, ")"] })] })), jsx("p", __assign({ className: "mt-2 w-full text-lg font-bold truncate" }, { children: data.productName })), jsx("p", __assign({ className: "w-full line-clamp-2" }, { children: data.productDescription })), jsx("p", __assign({ className: "text-black-300 w-full truncate" }, { children: data.productColor }))] }), keyIndex));
};

export { Ads, ArticleCard, Brands, Card, GroupCard, ReviewCard, TopAvatarCard };
//# sourceMappingURL=index.js.map
