CREATE PROCEDURE GetCustomerOrderSummary
    @CustomerID INT
AS
BEGIN

    DECLARE @TotalOrders INT;
    DECLARE @TotalAmount DECIMAL(18, 2);

    SELECT @TotalOrders = COUNT(*)
    FROM Orders
    WHERE CustomerID = @CustomerID;

    SELECT @TotalAmount = SUM(OrderAmount)
    FROM Orders
    WHERE CustomerID = @CustomerID;

    SELECT @TotalOrders AS TotalOrders, @TotalAmount AS TotalAmount;
END;
