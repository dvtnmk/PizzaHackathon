pragma solidity ^0.4.18;

import "./ownable.sol";
import "./safemath.sol";

/**
* @title TbmContract
* @dev Market Place Distribution Application
*/
contract TbmContract is Ownable {
    
    uint tokenPrice = 0.001 ether;
    uint initToken = 10000;
    uint commission = 2; 
    
    using SafeMath for uint256;
    
    struct Member {
        string firstName;
        string lastName;
        address current;
    }
    
    struct Product {
        uint id;
        address owner;
        string name;
        uint price;
        uint total;
        string place;
        string province;
        string country;
    }
    
    Member[] private members;
    Product[] private products;

    uint[] private listProductId;
    
    mapping (uint => address) memberToOwner;
    mapping (address => uint) ownerMemberToken;
    
    mapping (uint => address) productToOwner;
    mapping (uint => Product) IdToProduct;
    
    event OrderComplete(uint productId);
    event buyTokenComplete(address buyer);
    
    constructor() public {
        createMember("Storygu", "Teemo");
        setToken(initToken);
    }
    

    function setProduct(string _name, uint _price, uint _total, string _place, string _province, string _country) public {
        uint id = products.length;
        products.push(Product(id, msg.sender, _name, _price, _total, _place, _province, _country));
        IdToProduct[id] = products[id];
        productToOwner[id] = msg.sender;
    }
    
    function buyToken(uint token) public payable {
        require(msg.value == (token * tokenPrice));
        address dealer = memberToOwner[0];
        uint TokenDealer = getToken(dealer);
        require(TokenDealer >= token);
        
        ownerMemberToken[msg.sender] += token;
        ownerMemberToken[dealer] = getToken(dealer) - token;
        
        dealer.transfer(msg.value);
        emit buyTokenComplete(msg.sender);
    }
    
    function getAllProduct(string name) public view returns(uint[]){
        require(products.length > 0);
        uint counter = 0;
        uint index = 0;
        for (uint i=0; i < products.length; i++) {
            if (keccak256(name) == keccak256(products[i].name)) {
                counter++;
            }
        }
        uint[] memory listId = new uint[](counter);
        for (uint j=0; j < products.length; j++) {
            if (keccak256(name) == keccak256(products[j].name)) {
                listId[index] = products[j].id;
                index++;
            }
        }
        return (listId);
    }
    
    function OrderMatching(uint _productId) public {
        address seller = productToOwner[_productId];
        require(ownerMemberToken[seller] >= commission);
        ownerMemberToken[seller] = ownerMemberToken[seller] - commission; 
        
        address dealer = memberToOwner[0];
        ownerMemberToken[dealer] += commission;
        
        emit OrderComplete(_productId);
    }
    
    function createMember(string _firstName, string _lastName) private onlyOwner {
        uint id = members.push(Member(_firstName, _lastName, msg.sender)) - 1;
        memberToOwner[id] = msg.sender;
        ownerMemberToken[msg.sender] = 0;
    }
    
    function getProductById(uint _id) public view returns(uint,
        address,
        string,
        uint,
        uint,
        string,
        string,
        string) {
        Product memory result = IdToProduct[_id];
        return (result.id, 
                result.owner,
                result.name,
                result.price,
                result.total,
                result.place,
                result.province,
                result.country
                );
    }
    
    function setToken(uint token) private {
        ownerMemberToken[msg.sender] = token;
    }
    
    function getToken(address _address) public view returns(uint){
        return ownerMemberToken[_address];
    }
    
    function setPriceToken(uint _price) public onlyOwner() {
        tokenPrice = _price;
    }
}